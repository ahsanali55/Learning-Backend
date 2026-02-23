const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // make Navbar
  if (req.url === "/") {
    res.write(`<html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Myntra Clone</title>
</head>
<body>
  <header>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/men">Men</a></li>
        <li><a href="/women">Women</a></li>
        <li><a href="/kids">Kids</a></li>
        <li><a href="/cart">🛒</a></li>
      </ul>
    </nav>
  </header>
</body>
</html>`);
   return res.end();
  }
   else if (req.url === "/about") {
    res.setHeader("Content-Type", "text/html");
    res.write("Welcome to the about Page");
    return res.end();
  }
   else if (req.url === "/men") {
    res.setHeader("Content-Type", "text/html");
    res.write("Welcome to the Men Page.");
    return res.end();
  } 
  else if (req.url === "/women") {
    res.setHeader("Content-Type", "text/html");
    res.write("Welcome to the Women Page.");
    return res.end();
  }
   else if (req.url === "/kids") {
    res.setHeader("Content-Type", "text/html");
    res.write("Welcome to the Kids Page.");
    return res.end();
  } 
  else if (req.url === "/cart") {
    res.setHeader("Content-Type", "text/html");
    res.write("Welcome to the Cart Page.");
    return res.end();
  }
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log("Server is listensing on http://localhost:", PORT);
});
