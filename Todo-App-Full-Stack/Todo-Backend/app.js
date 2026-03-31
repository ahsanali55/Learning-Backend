// Core Module
const path = require("path");

// External Module
const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const DB_PATH =
  "mongodb://ahsanalijawad599:ahsan599@ac-kfoohql-shard-00-00.sh1jstp.mongodb.net:27017,ac-kfoohql-shard-00-01.sh1jstp.mongodb.net:27017,ac-kfoohql-shard-00-02.sh1jstp.mongodb.net:27017/todo?ssl=true&replicaSet=atlas-el19js-shard-0&authSource=admin&appName=Ahsan-Ali";

//Local Module
const rootDir = require("./utils/pathUtil");
const todoItemRouter = require("./routes/todoItemRouter");
const errorsController = require("./controllers/errors");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors()); // just for security purposes, to allow only requests from the frontend server
app.use(express.static(path.join(rootDir, "public")));

app.use("/api/todo", todoItemRouter);

app.use(errorsController.pageNotFound);
const PORT = 3000;

mongoose
  .connect(DB_PATH)
  .then(() => {
    console.log("Connected to Mongo");
    app.listen(PORT, () => {
      console.log(`Server running on address http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error while connecting to Mongo: ", err);
  });
