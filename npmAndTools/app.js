// import build-in core module
const http = require('http');

const server = http.createServer((req, res ) => {
  console.log('Request received', req.url, req.method, req.headers);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  
}); 