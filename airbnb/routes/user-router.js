const express = require('express');
const userRouter = express.Router();

userRouter.get('/', (req, res, next) => {
  console.log(req.url, req.method, req.body);
res.send(`
  <h1>Welcome to Airbnb</h1>
  <a href="/add-home">Add Home</a>
  `);
});
module.exports = userRouter;