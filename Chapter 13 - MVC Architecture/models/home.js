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
  save(){
    Home.fetchAll((registerHomes) => {
      registerHomes.push(this);
      const homeDataPath = path.join(rootDir, "data", "home.json");
      fs.writeFile(homeDataPath, JSON.stringify(registerHomes), (err) => {
        console.log("File Writting Conluded: ", err);
      })
    })
  }
  static fetchAll(callback){
    const homeDataPath = path.join(rootDir, "data", "home.json");
    
     fs.readFile(homeDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }

}