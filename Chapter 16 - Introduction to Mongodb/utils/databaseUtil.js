const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const MONGO_URL =
  "mongodb://ahsanalijawad599:ahsan599@ac-kfoohql-shard-00-00.sh1jstp.mongodb.net:27017,ac-kfoohql-shard-00-01.sh1jstp.mongodb.net:27017,ac-kfoohql-shard-00-02.sh1jstp.mongodb.net:27017/?ssl=true&replicaSet=atlas-el19js-shard-0&authSource=admin&appName=Ahsan-Ali";

let _db;

const mongodbConnect = (callback) => {
  MongoClient.connect(MONGO_URL)
    .then((client) => {
      console.log("MongoDB Connected");
      callback();
      _db = client.db("airbnb");
    })
    .catch((err) => {
      console.log("Error while connecting mongodb:", err);
    });
};

const getDB = () => {
  if (!_db) {
    throw new Error("Mongodb not connected");
  }
  return _db;
};
exports.getDB = getDB;
exports.mongodbConnect = mongodbConnect;
