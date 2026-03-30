// Core Module
const path = require('path');

// External Module
const express = require('express');
const session = require('express-session');
const multer = require('multer');
const MongoDBStore = require('connect-mongodb-session')(session);
const DB_PATH =
  "mongodb://ahsanalijawad599:ahsan599@ac-kfoohql-shard-00-00.sh1jstp.mongodb.net:27017,ac-kfoohql-shard-00-01.sh1jstp.mongodb.net:27017,ac-kfoohql-shard-00-02.sh1jstp.mongodb.net:27017/airbnb?ssl=true&replicaSet=atlas-el19js-shard-0&authSource=admin&appName=Ahsan-Ali";
  const { default: mongoose } = require('mongoose');

//Local Module
const storeRouter = require("./routes/storeRouter")
const hostRouter = require("./routes/hostRouter")
const authRouter = require("./routes/authRouter")
const rootDir = require("./utils/pathUtil");
const errorsController = require("./controllers/errors");

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const store = new MongoDBStore({
  uri: DB_PATH,
  collection: 'sessions'
});

app.use(session({
  secret: "KnowledgeGate AI with Complete Coding",
  resave: false,
  saveUninitialized: true,
  store
}));

app.use((req, res, next) => {
  req.isLoggedIn = req.session.isLoggedIn
  next();
})

const randomString = (length) => {
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
}

// File upload configuration customized for our use case
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, randomString(10) + '-' + file.originalname);
  }
});

// Only allow image files to be uploaded for those formats
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg' ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
}

const multerOptions = {
  storage,
  fileFilter
}
app.use(express.urlencoded());
app.use(multer(multerOptions).single('photo'));
app.use(express.static(path.join(rootDir, 'public')));
app.use('/uploads/', express.static(path.join(rootDir, 'uploads/')));
app.use('/host/uploads/', express.static(path.join(rootDir, 'uploads/')));
app.use('/homes/uploads/', express.static(path.join(rootDir, 'uploads/')));
app.use('/favourites/uploads/', express.static(path.join(rootDir, 'uploads/')));
app.use('/edit-home/uploads/', express.static(path.join(rootDir, 'uploads/')));
app.use('/host-home-list/uploads/', express.static(path.join(rootDir, 'uploads/')));


app.use(authRouter)
app.use(storeRouter);
app.use("/host", (req, res, next) => {
  if (req.isLoggedIn) {
    next();
  } else {
    res.redirect("/login");
  }
});
app.use("/host", hostRouter);


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
