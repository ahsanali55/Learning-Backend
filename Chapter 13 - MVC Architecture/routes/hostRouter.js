// Core Module
const path = require('path');

// External Module
const express = require('express');
const hostRouter = express.Router();

// Local Module
const rootDir = require("../utils/pathUtil");
const homeController = require('../controllers/home');
const homeAddedController = require('../controllers/home');

hostRouter.get("/add-home", homeController.getAddHome);
hostRouter.post("/add-home", homeAddedController.getHomeAdded);

exports.hostRouter = hostRouter;

