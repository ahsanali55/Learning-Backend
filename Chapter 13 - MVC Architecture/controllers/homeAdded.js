const { registeredHomes } = require('../routes/hostRouter')

exports.getHomeAdded = (req, res, next) => {
  console.log('Home Registration successful for:', req.body, req.body.houseName);
  registeredHomes.push({houseName: req.body.houseName});
  res.render('homeAdded', {pageTitle: 'Home Added Successfully'});
}