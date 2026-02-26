// import external modules
const express = require('express'); 
// import local modules as well as custom modules and also files
const reqestHandler = require('./user');

const app = express();

app.use("/", (req, res, next) => {
  console.log("Came in first middleware ", req.url, req.method);
  // res.send("came in second middleware");
    next()
    // next();  After sending respone, we can't call next function because response is already sent and we can't send response again. So, we can comment next() function here. If we want to call next() function, then we have to remove res.send() function from here.
    // after sending response, implicitly call response.end()
});

app.get("/contact-us",(req, res, next) => {
  console.log("Came in third middleware ", req.url, req.method);
  res.send(`<h1>Hello from Express Server</h1>
    <form action="/submit-detail" method="POST">
    <input type="text" name="username" placeholder="Enter your name " />
    <label for='male'>Male</label>
    <input type="radio" id="male" name="gender" value="male" /> 
    <label for='female'>Female</label>
    <input type="radio" name="gender" value="female" />
    <button>Submit</button>
    </form>
    `);
});
app.post("/submit-detail", (req, res, next) => {
  console.log("Came in fourth middleware ", req.url, req.method);
  res.send("Data submitted successfully");
})
app.use("/", (req, res, next) => {
  console.log("Came in second middleware ", req.url, req.method);
  res.send("<a href='/contact-us'>Contact Us</a>");
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
}); 