const http = require('http');
http.createServer((req, res) => {
  res.end("Node App CI/CD Running");
}).listen(3000);
