const path = require("path");
// import external modules
const express = require('express'); 
const bodyParser = require('body-parser');

// import local modules as well as custom modules and also files
const reqestHandler = require('./user');
const homeRouter = require('./routes/homeRouter');
const contactUsRouter = require('./routes/contactUsRouter');
const submitDataRouter = require('./routes/submitDataRouter');
const app = express();

app.use("/", (req, res, next) => {
  console.log("Came in first middleware ", req.url, req.method);
  // res.send("came in second middleware");
    next()
    // next();  After sending respone, we can't call next function because response is already sent and we can't send response again. So, we can comment next() function here. If we want to call next() function, then we have to remove res.send() function from here.
    // after sending response, implicitly call response.end()
});


// parsing the incoming request body
app.use(bodyParser.urlencoded());
app.use(homeRouter);
app.use(contactUsRouter);
app.use(submitDataRouter);

// Global error handling middleware
// Granting access to the static files like css, js, images etc. to the client
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});



const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
}); 