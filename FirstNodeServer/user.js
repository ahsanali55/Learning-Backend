
const fs = require('fs');
// function requestListenser(req, res) {
//     console.log('Request received', req);
// }

const reqestHandler = (req, res) => { 
    // console.log('Request received', req.url, req.method, req.headers);
    // process.exit();  // stop event loop after receiving first request

    if (req.url === '/'){
      res.setHeader('Content-Type', 'text/html');
      res.write('<html>');
      res.write('<head><title>Home Page</title></head>');
      res.write('<body><h1>Welcome to the Home Page!</h1>');
      res.write('<form action="/submit-detail" method="POST">');
      res.write('<input type="text" name="username" placeholder="Enter your name " /> <br/>');
      res.write("<label for='male'>Male</label>");
      res.write('<input type="radio" id="male" name="gender" value="male" /> ');
      res.write("<label for='female'>Female</label>");
      res.write('<input type="radio" name="gender" value="female" /> <br/>');
      res.write('<button>Submit</button>')
      res.write('</form>');
      res.write('</body>');
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
    else if (req.url.toLowerCase() === '/submit-detail' && req.method === 'POST'){

      const body = [];
      req.on('data', (chunk) => {
        console.log("Chunk Received ", chunk);
        body.push(chunk);
      })

      req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        console.log("Data after parsed ", parsedBody);
        const params = new URLSearchParams(parsedBody);
        console.log("Params ", params)
        // const bodyObject = {};
        // for (const [key, value] of params.entries()){
        //   BodyObject[key] = value;
        // }
         
        // Easiest way 
        const bodyObject = Object.fromEntries(params);
        console.log(bodyObject);
        fs.writeFile('user.txt', JSON.stringify(bodyObject));       
        res.statusCode = 302; // It means resource has been created and we are redirecting to another page
        res.setHeader('Location', '/'); // Redirect to home page afetr form submission
        return res.end();
      })

    }
      res.setHeader('Content-Type', 'text/html');
      res.write('<html>');
      res.write('<head><title>Learning Backend</title></head>');
      res.write('<body><h1>Hello from Node.js Server! <br />learning Backend with Node.js and Express.js </h1></body>');
      res.write('</html>');
      return res.end();
}
module.exports = reqestHandler;
