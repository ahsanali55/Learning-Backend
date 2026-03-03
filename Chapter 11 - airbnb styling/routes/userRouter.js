// Core Modules
const path = require('path');

// External Module
const express = require('express');
const userRouter = express.Router();
const { registerHomes } = require("./hostRouter");

// Local Module
const rootDir = require("../utils/pathUtil");

userRouter.get("/", (req, res, next) => {
  console.log(registerHomes)
  res.render("home", { registerHomes: registerHomes, pageTitle: 'airbnb Home' });
});

module.exports = userRouter;