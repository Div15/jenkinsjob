const http = require('http');
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("Updated App\nNode App CI/CD Running");
}).listen(3000);
