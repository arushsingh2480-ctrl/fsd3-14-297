
import { createReadStream } from "fs";
import http from "http";
import { readFile } from "fs/promises";


const server = http.createServer(async(requestAnimationFrame,res)=>{
    if(req.url==="/stream"){
    const stream= createReadStream("big.txt",{encoding:"utf"});
    stream.pipe(res);
    }else if (req.url==="/normal"){
        const text=await readFile("big.txt");
        res.end(text);
    }
    else if(req.url==="/product"){
        res.setHeader("content-type","text/html");
        res.statusCode=200;
        const data=createReadStream("Product.html");
        data.pipe(res);
    }
});

server.listen(3000, ()=>console.log("server is running at 3000..."));