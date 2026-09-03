import { createReadStream } from "fs";
import http from "http";

const server = http.createServer((req, res) => {
    if (req.url === "/") {

        res.setHeader("Content-Type", "text/html");
        res.statusCode = 200;

        const stream = createReadStream("./pages/airtag.html");

        stream.pipe(res);
    }
    else if (req.url === "/mobile") {

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        const stream = createReadStream("./data/products.json", {
            encoding: "utf-8"
        });

        stream.pipe(res);
    }
    else if (req.url === "/manual") {

        res.writeHead(200, {
            "Content-Type": "text/plain"
        });

        const stream = createReadStream("./data/chatgpt.txt", {
            encoding: "utf-8"
        });

        stream.pipe(res);
    }
    else {

        res.statusCode = 404;

        res.setHeader(
            "Content-Type",
            "text/plain"
        );

        res.end("Not found");
    }
});

server.listen(3000, () => {
    console.log("prog9 is running at 3000...");
});