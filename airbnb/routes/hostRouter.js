const express = require('express');

const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {
  res.send(`
      <h1>Register your home here</h1>
      <form action="/add-home" method='POST' >
      <input type='text' name='houseName' placeholder='Enter the name of your house' />
      <input type="submit" />
      </form>
      `);
});
module.exports = hostRouter;