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
  console.log("Home Registration successfull for: ", req.body, req.body.houseName);
  registerHomes.push({houseName:req.body.houseName});
  res.render('homeAdded', { pageTitle: 'Home Added'});
  console.log("The homes are: ", registerHomes);
});
exports.hostRouter = hostRouter;
exports.registerHomes = registerHomes;