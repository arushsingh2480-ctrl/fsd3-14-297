import http from 'http';

const server = http.createServer((req, res) => {

    if (req.url === '/' && req.method === 'GET')
        res.end('home page');

    else if (req.url === '/product' && req.method === 'GET'){
        const products =[
            {
    "id": 1,
    "brand": "Apple",
    "model": "iPhone 15",
    "price": 69999,
            },
            {
    "id": 2,
    "brand": "Samsung",
    "model": "Galaxy S24",
    "price": 74999,
            }
        ];
        res.end('show product');
    }
    else if (req.url === '/product' && req.method === 'POST'){
        // retrive data from client
        let body;
        req.on("data",(chunk)=>{
            body+=chunk
        })
        req.on("end",()=>{
            const product=JSON.parse(body);
        })
        // add data to database
        // send back the status
        res.end('add product');
    }
    else if (req.url === '/product' && req.method === 'PUT')
        res.end('update product');

    else if (req.url === '/product' && req.method === 'DELETE')
        res.end('remove product');

});

server.listen(3001, () => {
    console.log("prog11 is running");
});