const http = require('http');
const PORT = 4040;
const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.setHeader('Content-type', 'text/html');
        res.write(`
                <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>MSH Homepage</title>
    </head>
    <body>
        <h1>Hey, Welcome to this Website</h1>
        <nav>
            <ul>
                <li><a href="/calculator">Calculator</a></li>
            </ul>
        </nav>
    </body>
    </html>
            `)
            return res.end();
    } else if(req.url === '/calculator'){
          res.setHeader('Content-type', 'text/html');
          res.write(`
            <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>MSH Homepage</title>
    </head>
    <body>
        <h1>Calculator</h1>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
            </ul>
        </nav>

        <form action="/calculate" method="POST">
            <label for="fNumber">First Number :: </label> <br>
            <input type="number" name="fNumber" id="fNumber"> <br>
            
            <label for="SNumber">Second Number :: </label> <br>
            <input type="number" name="SNumber" id="SNumber"> <br>

            <input type="submit" value="SUM">
        </form>
    </body>
    </html>
            `);
            return res.end();
    } else if(req.url.toLowerCase() === '/calculate' && req.method === "POST"){
        const body =[];
        req.on("data", chunk=>{
            //console.log(chunk);
            body.push(chunk)});

        req.on("end", ()=>{
            const jsonBody = Buffer.concat(body).toString();
           // console.log(jsonBody);
           const params = new URLSearchParams(jsonBody);
           const bodyOBJ = Object.fromEntries(params);
        //   console.log(bodyOBJ);
        let result = (Number(bodyOBJ.fNumber) + Number(bodyOBJ.SNumber));
        // console.log(result);
        res.write(`
            <h1>The Sum of <span style="color: red">${bodyOBJ.fNumber}</span> and  <span style="color: red">${bodyOBJ.SNumber}</span> is ${result}</h1>
            `);
            return res.end();
        })
    }
    else {
        res.statusCode = 404;
        res.end('Page not found');
    }
   
});







server.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})