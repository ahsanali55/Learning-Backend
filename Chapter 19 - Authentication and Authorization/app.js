// Core Module
const path = require("path");

// External Module
const express = require("express");
const session = require("express-session");
const mongoDBStore = require("connect-mongodb-session")(session);
const DB_PATH =
  "mongodb://ahsanalijawad599:ahsan599@ac-kfoohql-shard-00-00.sh1jstp.mongodb.net:27017,ac-kfoohql-shard-00-01.sh1jstp.mongodb.net:27017,ac-kfoohql-shard-00-02.sh1jstp.mongodb.net:27017/airbnb?ssl=true&replicaSet=atlas-el19js-shard-0&authSource=admin&appName=Ahsan-Ali";

//Local Module
const storeRouter = require("./routes/storeRouter");
const hostRouter = require("./routes/hostRouter");
const authRouter = require("./routes/authRouter");
const rootDir = require("./utils/pathUtil");
const errorsController = require("./controllers/errors");
const { default: mongoose } = require("mongoose");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const store = new mongoDBStore({
  uri: DB_PATH,
  collection: 'sessions',
})

app.use(express.urlencoded());

app.use(session({
  secret: "airbnb",
  resave: false,
  saveUninitialized: true,
  store: store,   
}));


app.use(storeRouter);
app.use("/host", (req, res, next) => {
  if (req.isLoggedIn) {
    next();
  } else {
    res.redirect("/login");
  }
});
app.use("/host", hostRouter);
app.use(authRouter);

app.use(express.static(path.join(rootDir, "public")));

app.use(errorsController.pageNotFound);

const PORT = 3000;


mongoose.connect(DB_PATH)
  .then(() => {
    console.log("Connected to Mongodb");
    app.listen(PORT, () => {
      console.log(`Server running on address http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error while connecting to mongodb ", err);
  });
