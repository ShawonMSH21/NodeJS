const http = require('http');
const fs = require('fs');
const PORT = 4040;

const server = http.createServer((req, res) => {
    // Log the request (on every request)
    console.log(req.url, req.method);

    if (req.url === "/") {
        res.setHeader('Content-Type', 'text/html');
        res.write(`<h2>Welcome to Homepage</h2>`);
        
        // Log the request to a file
        fs.writeFile('./logs.txt', `Request created at ${Date.now()} using ${req.method} method.\n`, { flag: 'a' }, (err) => {
            if (err) {
                console.log('Error logging:', err);
            } else {
                console.log('Successfully logged.');
            }
        });

        return res.end();
    }

    else if (req.url === "/form") {
        res.setHeader('Content-type', 'text/html');
        res.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Form</title>
            </head>
            <body>
                <h3>Please fill-up the form</h3>
                <form action="/submit-details" method="post">
                    <label for="name">Name : </label> <br>
                    <input type="text" name="username" id="name"> <br>

                    <label for="email">Email : </label> <br>
                    <input type="email" name="email" id="email">

                    <input type="submit" value="Submit">
                </form>
            </body>
            </html>
        `);
        return res.end();
    }

    else if (req.url === '/submit-details' && req.method === 'POST') {
        let body = '';

        // Collect the data from the request body
        req.on('data', chunk => {
            body += chunk;
        });

        // Once all data has been received, parse it
        req.on('end', () => {
            const parsedBody = new URLSearchParams(body); // Parse the URL-encoded form data
            const name = parsedBody.get('username');
            const email = parsedBody.get('email');

            // Log the details to a file
            fs.writeFile(`${name}.txt`, `username: ${name} and email: ${email}`, (err) => {
                if (err) {
                    console.log('Error writing file:', err);
                    res.statusCode = 500;
                    return res.end('Error saving data.');
                }
                console.log('User details saved successfully.');

                // Redirect after form submission
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }

    else {
        res.statusCode = 404;
        res.end('Page not found');
    }
});

server.listen(PORT, () => {
    console.log(`Server is successfully running at http://localhost:${PORT}`);
});
