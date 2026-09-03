
import http from "http";

const server = http.createServer((req, res) => {
    console.log("method:",req.method);
    if(req.url==="/"&&req.method==="GET"){
        res.end("<h1>Products details</h1>");
    }
    else{
        res.statusCode=404;
        res.end("Not Found");
    }
    });
server.listen(3000, () =>
    console.log("prog10 is running at 3000..."));