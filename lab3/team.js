let teams=[
    {id:1,tname:"Rusty",tl:"Ashish Raj Singh",email:'ashi.raj@gmail.com',members:6,
},

{id:2,tname:"blinders",tl:"Arush pratap singh",email:"arushsingh2480@gmail.com",members:6,
},

{id:3,tname:"Nexus",tl:"ishaan",email:"kartikey68@gmail.com",members:6,
},
];

let nextId=3;

export const getAllTeams=()=>teams;
export const getTeamById=(id)=>teams.find((team)=>team.id===id);
export const addTeam=(newTeam)=>{
    const team={id:nextId++,newTeam};
    teams.push(team);
    return team;
};
export const updateTeambyId=(id,updateTeam)=>{
    const team=getTeambyId(id);
    if(!team) return null;
    Object.assign(team,updateTeam);
    return team;
};

export const deleteTeam=(id)=>{
    const index=teams.findIndex((team)=>team.id===id);
    if(index==-1) return false;
    teams.splice(index,1);
    return true;
};