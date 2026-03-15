// 

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl, description, id) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
    this.description = description;
    this.id = id;
  }

  save() {
   
  }

  static fetchAll() {
    return 
  }

  static findById(homeId) {
    return 
  }

  static deleteById(homeId) {
    return 
  }
};
