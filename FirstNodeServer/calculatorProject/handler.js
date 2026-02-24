const { sumRequestHandler } = require('./sum');
const handleRequest = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === '/' && req.method === 'GET'){
    res.setHeader('Content-Type', 'text/html');
    res.write(`<html>
      <head><title>Calculator</title></head>
      <body>
        <h1>Welcome to the Calculator App</h1>
        <a href="/calculator">So, let's go to calculator click me !</a>
      </body>
      </html>`);
    return res.end();
  }
  else if (req.url === '/calculator' && req.method === 'GET') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`<html>
      <head><title>Calculator</title></head>
      <body>
      <h1>Calculator Page</h1>
      <form action="/calculate-result" method="POST">
      <input type="number" name="num1" placeholder="first number" required>
     
      <input type="number" name="num2" placeholder="second number" required>
      <button type="submit">Sum</button>
      </form>
      </body>
      </html>`);
      return res.end();
  }
  else if (req.url === '/calculate-result' && req.method === 'POST'){
    return sumRequestHandler(req, res); 
  }
    res.write(`<html>
      <head><title>Calculator</title></head>
      <body>
        <h1>404 - Page Not Found</h1>
        <a href="/">Go back to calculator</a>
      </body>
      </html>`);
    return res.end();

}
exports.handleRequest = handleRequest;