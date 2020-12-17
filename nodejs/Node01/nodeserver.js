const http = require('http');

http
.createServer((req, res) => {
    res.write('Hello from node web server');
    res.end();
})
.listen(80);
console.log('one');
console.log('two');
console.log('three')