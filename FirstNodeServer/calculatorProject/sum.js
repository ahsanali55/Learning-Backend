
const sumRequestHandler = (req, res) => {

  // Event loop
    // to handle the incoming data from the client, we need to listen to the data event on the request object
    const body = [];
    // listen to the data event to recieve the recieve the data in chunks 
    req.on('data', (chunk) => {
      console.log("Chunk Received ", chunk);
      body.push(chunk);
    })

    // listen to the end event to know when the data has been fully received
    // when the data is fully received, we can process or handle it and send the response back to the client
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const params = new URLSearchParams(parsedBody);
      console.log("Params ", params)
      const bodyObj = Object.fromEntries(params);
      const result = Number(bodyObj.num1) + Number(bodyObj.num2);
      console.log(result);
      res.setHeader('Content-Type', 'text/html');
      res.write(`<html>
        <head><title>Calculator Result</title></head>
        <body>
          <h1>Result: ${result}</h1>
          <a href="/calculator">Go back to calculator</a>
        </body>
      </html>`)
    });
}
exports.sumRequestHandler = sumRequestHandler;