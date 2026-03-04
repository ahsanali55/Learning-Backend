// Core Module
const path = require('path');

// External Module
const express = require('express');
const hostRouter = express.Router();

// Local Module
const rootDir = require("../utils/pathUtil");
const { request } = require('http');

hostRouter.get("/add-home", (req, res, next) => {
  res.render( 'addHome', { pageTitle: 'Add Home to airbnb' });
});


const registerHomes = [];
hostRouter.post("/add-home", (req, res, next) => {
  console.log("Home Registration successfull for: ", req.body);
  registerHomes.push(req.body );
  console.log("The homes are: ", registerHomes);
  res.render('homeAdded', { pageTitle: 'Home Added'});
});
exports.hostRouter = hostRouter;
exports.registerHomes = registerHomes;