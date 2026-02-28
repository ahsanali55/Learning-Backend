// core modules
const path = require("path");
// External imports Modules
const express = require("express");

// import local modules as well as custom modules and also files
const userRouter = require("./routes/userRouter");
const hostRouter = require('./routes/hostRouter');
const userDataRouter = require('./routes/PostDataRouter');
const rootDir = require("./utils/pathUtils")

const app = express();

// Middlewars
app.use("/", (req, res, next) => {
  console.log("This is your request ", req.url, req.method);
  next();
});

// parsing the incoming request body
app.use(express.urlencoded());

// using the imported routers
//These are all routes
app.use(userRouter);
app.use( hostRouter);
app.use( userDataRouter);


// 404 error handling middleware order matters
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running at ", PORT);
});
