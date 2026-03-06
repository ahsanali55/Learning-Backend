// Core Modules
const path = require('path');

// External Module
const express = require('express');
const userRouter = express.Router();

// Local Module
const GetHomeController = require('../controllers/home');

userRouter.get("/", GetHomeController.getHomes);

module.exports = userRouter;