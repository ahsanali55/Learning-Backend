// Core Modules
const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");
const favouriteDataPath = path.join(rootDir, "data", "favourite.json");

module.exports = class Favourite {
  static addToFavourite(id, callback){
    Favourite.getFavourite((favourites) => {
      if (favourites.includes(id)){
        callback("Home is already marked favourite");
      }
      else{
        favourites.push(id);
        fs.writeFile(favouriteDataPath, JSON.stringify(favourites), callback);
      }
    })
  }
  static getFavourite(callback){
    fs.readFile(favouriteDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }
};
