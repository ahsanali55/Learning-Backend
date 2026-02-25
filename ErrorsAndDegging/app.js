// import build-in core module
const http = require('http');
 const testingSyntax = require('./syntax');
 const reqestHandler = require('./user');

const server = http.createServer((req, res) => {
  console.log('Request received', req.url, req.method, req.headers);
  // testingSyntax();
  reqestHandler(req, res);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
}); 