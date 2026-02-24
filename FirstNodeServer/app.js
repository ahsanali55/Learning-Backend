// import build-in core module
const http = require('http');
 const userReqestHandler = require('./user');

const server = http.createServer(userReqestHandler);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
}); 