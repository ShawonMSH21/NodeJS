const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res)=>{

})

server.listen(PORT, ()=>{
    console.log("Server is running....");
})

// To restart server use "nodemon package" or use "node --watch <file name>"