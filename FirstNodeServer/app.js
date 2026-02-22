// import build-in core module
const http = require('http');

// function requestListenser(req, res) {
//     console.log('Request received', req);
// }

const server = http.createServer((req, res) => {
    console.log('Request received', req.url, req.method, req.headers);
    // process.exit();  // stop event loop after receiving first request

    if (req.url === '/'){
      res.setHeader('Content-Type', 'text/html');
      res.write('<html>');
      res.write('<head><title>Home Page</title></head>');
      res.write('<body><h1>Welcome to the Home Page!</h1></body>')

      res.write('</html>');
      return res.end();
    } else if (req.url === '/products') {
      res.setHeader('Content-Type', 'text/html');
      res.write('<html>');
      res.write('<head><title>Products</title></head>');
      res.write('<body><h1>Welcome to the Products Page!</h1></body>')
      res.write('</html>');
      return res.end();
    } 
      res.setHeader('Content-Type', 'text/html');
      res.write('<html>');
      res.write('<head><title>Learning Backend</title></head>');
      res.write('<body><h1>Hello from Node.js Server! <br />learning Backend with Node.js and Express.js </h1></body>');
      res.write('</html>');
      return res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
}); 