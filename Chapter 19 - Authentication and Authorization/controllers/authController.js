const { check, validationResult } = require("express-validator");
exports.getLogin = (req, res, next) => {
  console.log("Get Login page request ");
  res.render("auth/login", {
    pageTitle: "Login",
    currentPage: "login",
    isLoggedIn: false,
  });
};

exports.postLogin = (req, res, next) => {
  req.session.isLoggedIn = true;
  res.redirect("/");
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(() => {
    res.redirect("/login");
  });
};

exports.getSignUp = (req, res, next) => {
  res.render("auth/signup", {
    pageTitle: "SignUp",
    currentPage: "signUp",
    isLoggedIn: false,
    errors: [],
    oldInput: { firstName: "", lastName: "", password: "", userType: "" },
  });
};

exports.postSignUp = [
  // First Name validation
  check("firstName")
    .notEmpty()
    .withMessage("First name is required")
    .trim()
    .isLength({ min: 2 })
    .withMessage("First name must be atleast 2 characters long")
    .matches(/^[A-Za-z\s]+$/)
    .withMessage("First name should only alphabets letter"),

  // Last Name validation
  check("lastName")
    .notEmpty()
    .matches(/^[A-Za-z\s]+$/)
    .withMessage("Last name should only alphabets letter"),

  // Email validation
  check("email")
    .isEmail()
    .withMessage("Please enter a valid email")
    .normalizeEmail(),

  // Passward validation
  check("password")
    .isLength({ min: 5 })
    .withMessage("Passward should atleast 8 characters long")
    .matches(/^[A-Z]/)
    .withMessage("Passward should contain atleast one uppercase letter")
    .matches(/[0-9]/)
    .withMessage("Passward should contain atleast one number")
    .matches(/[!@#$%*&^]/)
    .withMessage("Pasward should contain atleast one special characters")
    .trim(),

  // Confirm passward validation
  check("confirmPassword")
    .trim()
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Password do not matches");
      }
      return true;
    }),

  // userType validation
  check("userType")
    .notEmpty()
    .isIn("guest", "host")
    .withMessage("Invalid user type"),

  // Terms validation
  check("terms")
    .notEmpty()
    .withMessage("Please accept the terms and conditions")
    .custom((value, { req }) => {
      if (value !== "on") {
        throw new Error("Please accept the terms and conditions");
      }
      return true;
    }),
  (req, res, next) => {
    const { firstName, lastName, email, password, userType } = req.body;
    const errors = validationResult(req);
    console.log("The errors ", errors)
    if (!errors.isEmpty()) {
      return res.status(422).render("auth/signup", {
        pageTitle: "Sign Up",
         currentPage: "signUp",
        isLoggedIn: false,
        errors: errors.array().map((error) => error.msg),
        oldInput: { firstName, lastName, password, userType },
      });
    }
    console.log("Post signup request getting ", req.body);
    res.redirect("/login");
  },
];
