import http from "http";
import {
  getAllTeams,
  addTeam,
  getTeamById,
  deleteTeam,
} from "./teams.js";

import { parse as parseUrl } from "url";

const PORT = 5050;

const sendJson = (res, statusCode, data, keyword, msg) => {
  res.writeHead(statusCode, {
    "content-type": "application/json",
  });

  res.end(
    JSON.stringify({
      [keyword]: msg,
      data,
    })
  );
};

const parseJSONBody = (req) => {
  return new Promise((resolve, reject) => {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(error);
      }
    });

    req.on("error", reject);
  });
};

const server = http.createServer(async (req, res) => {
  const { pathname, query } = parseUrl(req.url, true);
  const { method } = req;

  console.log("pathname:", pathname);
  console.log("query:", query);
  console.log("Method:", method);

  // GET ALL TEAMS
  if (pathname === "/api/v1/teams" && method === "GET") {
    const teams = getAllTeams();

    return sendJson(
      res,
      200,
      teams,
      "count",
      teams.length
    );
  }

  // ADD TEAM
  else if (pathname === "/api/v1/teams" && method === "POST") {
    const { tname, tl, members } = await parseJSONBody(req);

    if (!tname || !tl || !members) {
      return sendJson(
        res,
        400,
        null,
        "error",
        "Team Name, Team Leader, or Members not defined"
      );
    }

    const team = addTeam({
      tname,
      tl,
      members,
    });

    return sendJson(
      res,
      201,
      team,
      "Message",
      "Team registered successfully"
    );
  }

  // GET TEAM BY ID
  else if (
    pathname.startsWith("/api/v1/teams/") &&
    method === "GET"
  ) {
    const id = Number(pathname.split("/").pop());

    const team = getTeamById(id);

    if (!team) {
      return sendJson(
        res,
        404,
        null,
        "error",
        `Team with id: ${id} not found`
      );
    }

    return sendJson(
      res,
      200,
      team,
      "Message",
      "Team Found"
    );
  }

  // DELETE TEAM
  else if (
    pathname.startsWith("/api/v1/teams/") &&
    method === "DELETE"
  ) {
    const id = Number(pathname.split("/").pop());

    const team = getTeamById(id);

    // Team doesn't exist
    if (!team) {
      return sendJson(
        res,
        404,
        null,
        "error",
        `Team with id: ${id} not found`
      );
    }

    // Delete team
    const deletedTeam = deleteTeam(id);

    return sendJson(
      res,
      200,
      deletedTeam,
      "Message",
      "Team deleted successfully"
    );
  }

  // INVALID ROUTE
  else {
    res.statusCode = 404;
    res.end("Not matching");
  }
});

server.listen(PORT, () => {
  console.log("SIH Server is running at", PORT);
});

export const updateTeamById = (id, updateTeam)=>{
  const team = getTeamById(id);
  if(!team) return null;
  Object.assign(team,updateTeam);
  return team;
};

export const deleteTeam = (id)=> {
  const index = teams.findIndex((team)=>team.id===id);
  if(index==-1) return false;
  teams.splice(index,1);
  return true;
};
