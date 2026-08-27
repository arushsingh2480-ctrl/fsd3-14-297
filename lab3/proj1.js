import http from 'http'
const server = http.createServer((req,res)=>{
    console.log("Welcome to Node JS");
    console.log(req.url);
    console.log("Request Method")
    console.log("req.headers")
    res.end("hello")
});

const PORT=4444;
server.listen(PORT, ()=>console.log("server is running..."));