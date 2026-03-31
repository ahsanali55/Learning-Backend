// Core Module
const path = require('path');

// External Module
const express = require('express');
const DB_PATH =
  "mongodb://ahsanalijawad599:ahsan599@ac-kfoohql-shard-00-00.sh1jstp.mongodb.net:27017,ac-kfoohql-shard-00-01.sh1jstp.mongodb.net:27017,ac-kfoohql-shard-00-02.sh1jstp.mongodb.net:27017/todo?ssl=true&replicaSet=atlas-el19js-shard-0&authSource=admin&appName=Ahsan-Ali";
  const { default: mongoose } = require('mongoose');

//Local Module



const store = new MongoDBStore({
  uri: DB_PATH,
  collection: 'sessions'
});

const app = express();
app.use(express.urlencoded());
app.use(express.static(path.join(rootDir, 'public')));
app.use(errorsController.pageNotFound);

const PORT = 3003;

mongoose.connect(DB_PATH).then(() => {
  console.log('Connected to Mongo');
  app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
  });
}).catch(err => {
  console.log('Error while connecting to Mongo: ', err);
});
