const path = require("path");
const express = require("express");

// local imports
const homeRouter = express.Router();
const rootDir = require('../utils/pathUtils');

homeRouter.get("/", (req, res, next) => {
  console.log("Came in 2nd middleware ", req.url, req.method, req.body);
  res.sendFile(path.join(rootDir, 'views', 'home.html'));
});
module.exports = homeRouter;