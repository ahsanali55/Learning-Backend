const express = require('express');
// import local modules as well as custom modules and also files
const userDataRouter = express.Router();
userDataRouter.post("/add-home", (req, res, next) => {
  console.log("Data submitted ", req.url, req.method, req.body);
  res.send("Home added successfully");
});
module.exports = userDataRouter;