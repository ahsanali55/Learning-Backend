const fs = require('fs');
console.log("Hello World!");

// write data to local file
fs.writeFile("output.txt", "Hello, Welcome to Node.js!", (err) => {
  if (err) throw err;
  console.log("Data has been written to output.txt");
})