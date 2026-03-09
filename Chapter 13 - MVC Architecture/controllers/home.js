const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render('host/addHome', {pageTitle: 'Add Home to airbnb'});
}

exports.getHomeAdded = (req, res, next) => {
  console.log('Home Registration successful for:', req.body, req.body.houseName);
  const { houseName, price, location, rating, photoUrl } = req.body;
  const home = new Home(houseName, price, location, rating, photoUrl);
  home.save(); // push the object to registered home
  res.render('host/homeAdded', {pageTitle: 'Home Added Successfully'});
}

exports.getHomes = (req, res, next) => {
  const registeredHomes = Home.fetchAll((registeredHomes) => {
     res.render('store/home-list', {registeredHomes: registeredHomes, pageTitle: 'airbnb Home'});
  });
  console.log(registeredHomes);

 
}