const http = require('http');
http.createServer((req, res) => {
  res.write("Updated App\n");
  res.end("Node App CI/CD Running");
}).listen(3000);
