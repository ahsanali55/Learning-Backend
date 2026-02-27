const express = require("express");

// import local modules as well as custom modules and also files
const userRouter = require("./routes/user-router");
const hostRouter = require('./routes/hostRouter');
const userDataRouter = require('./routes/PostDataRouter');

const app = express();

// Middlewars
app.use("/", (req, res, next) => {
  console.log("This is your request ", req.url, req.method);
  next();
});

// parsing the incoming request body
app.use(express.urlencoded());
app.use(userRouter);
app.use(hostRouter);
app.use(userDataRouter);


const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running at ", PORT);
});
