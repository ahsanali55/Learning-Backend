const fs = require('fs');
const path = require('path');

const rootDir = require("../utils/pathUtil");
const { register } = require('module');

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }

  static fetchAll(callback){
    const homeDataPath = path.join(rootDir, "data", "home.json");
    
    fs.readFile(homeDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }

  save(){
    Home.fetchAll((registerHomes) => {
      registerHomes.push(this);
      const homeDataPath = path.join(rootDir, "data", "home.json");
      fs.writeFile(homeDataPath, JSON.stringify(registerHomes, null, 2), (err) => {
        if (err) console.log("File Writing Error: ", err);
        else console.log("File Writing Concluded Successfully");
      })
    })
  }

}