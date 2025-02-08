const http = require('http');
const PORT = 4040;

const server = http.createServer((req, res)=>{
    console.log(req);
});

server.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});
