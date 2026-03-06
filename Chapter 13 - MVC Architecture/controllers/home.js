const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render('addHome', {pageTitle: 'Add Home to airbnb'});
}

exports.getHomeAdded = (req, res, next) => {
  console.log('Home Registration successful for:', req.body, req.body.houseName);
  const { houseName, price, location, rating, photoUrl } = req.body;
  const home = new Home(houseName, price, location, rating, photoUrl);
  home.save(); // push the object to registered home
  res.render('homeAdded', {pageTitle: 'Home Added Successfully'});
}

exports.getHomes = (req, res, next) => {
  const registeredHomes = Home.fetchAll();
  console.log(registeredHomes);

  res.render('home', {registeredHomes: registeredHomes, pageTitle: 'airbnb Home'});
}