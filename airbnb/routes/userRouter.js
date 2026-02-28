// core modules -built in modules
const path = require('path');

// External imports Modules
const express = require('express');
const userRouter = express.Router();

// Local imports
const rootDir = require('../utils/pathUtils')

userRouter.get('/', (req, res, next) => {
  console.log(req.url, req.method, req.body);
res.sendFile(path.join(rootDir, 'views', 'home.html'));
});
module.exports = userRouter;