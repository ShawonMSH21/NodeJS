const http = require("http");
const PORT = 2121;

const server = http.createServer((req, res)=>{
    if(req.url === "/"){
        // res.setHeader("Content-Type", "text/plain");
        res.setHeader("Content-Type", "text/html");
        // res.write("Assalamu Alaikum and Welcome.");
        res.write("<h1>Hey, what's up?</h1>");
        res.end();
    }

    else if (req.url === "/contact"){
        res.setHeader("Content-Type", "text/html");
        res.write("<h4>Please call +8801500000000 to connect with me.</h4>");
        res.end();
    }
});



server.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})