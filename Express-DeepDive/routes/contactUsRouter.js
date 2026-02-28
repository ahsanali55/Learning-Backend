

const path = require("path");
const express = require("express");

// local modules
const contactUsRouter = express.Router();
const rootDir = require('../utils/pathUtils');

contactUsRouter.get("/contact-us",(req, res, next) => {
  console.log("Came in third middleware ", req.url, req.method);
  res.sendFile(path.join(rootDir, 'views', 'contact-us.html'));
});
module.exports = contactUsRouter;