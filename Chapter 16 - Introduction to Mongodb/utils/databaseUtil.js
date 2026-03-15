const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const MONGO_URL =
  "mongodb://ahsanalijawad599:ahsan599@ac-chqaity-shard-00-00.rmfzwuw.mongodb.net:27017,ac-chqaity-shard-00-01.rmfzwuw.mongodb.net:27017,ac-chqaity-shard-00-02.rmfzwuw.mongodb.net:27017/?ssl=true&replicaSet=atlas-npsnx5-shard-0&authSource=admin&appName=Airbnb";

const mongodbConnect = (callback) => {
  MongoClient.connect(MONGO_URL)
    .then((client) => {
      console.log("MongoDB Connected");
      callback(client);
    })
    .catch((err) => {
      console.log("Error while connecting mongodb:", err);
    });
};

module.exports = mongodbConnect;
