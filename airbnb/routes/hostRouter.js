const path = require("path");

const express = require('express');

// local imports
const rootDir = require('../utils/pathUtils')

const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "addHome.html"));
});
module.exports = hostRouter;