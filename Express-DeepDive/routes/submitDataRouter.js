const path = require("path");
const express = require("express");

//local imports
const submitDataRouter = express.Router();
const rootDir = require('../utils/pathUtils');

submitDataRouter.post("/submit-detail", (req, res, next) => {
  console.log("Came in fourth middleware ", req.url, req.method, req.body);
  res.sendFile(path.join(rootDir, 'views', 'submitData.html'));
});
module.exports = submitDataRouter;