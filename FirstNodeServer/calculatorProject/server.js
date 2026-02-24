const http = require('http');
const { handleRequest } = require('./handler');

const server = http.createServer(handleRequest);

server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
})