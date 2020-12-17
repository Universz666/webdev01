const http = require('http');

http
.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`<html>
    <head>
    <body>
    <h1>I need sleep</h1>
    </body>
    </head>
    </html>`);
    res.end();
})
.listen(80);
console.log('one');
console.log('two');
console.log('three')