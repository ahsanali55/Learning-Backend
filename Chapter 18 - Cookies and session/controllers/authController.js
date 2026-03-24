exports.getLogin = (req, res, next) => {
  console.log("Get Login page request ");
  res.render("auth/edit-home", {
    pageTitle: "Login",
    currentPage: "login",
    isLoggedIn: false
  });
};

exports.postLogin = (req, res, next) => {
  console.log("Post Login page request ", req.body);
  res.cookie("isLoggedIn", true);
  res.redirect("/");
}

exports.postLogout = (req, res, next) => {
  res.cookie("isLoggedIn", 'false');
  res.redirect('/')

}
