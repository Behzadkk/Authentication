const express = require("express"),
  mongoose = require("mongoose"),
  passport = require("passport"),
  bodyParser = require("body-parser"),
  User = require("./models/user"),
  LocalStrategy = require("passport-local"),
  passportLocalMongoose = require("passport-local-mongoose");
mongoose.connect("mongodb://localhost:27017/auth_demo_app", {
  useNewUrlParser: true
});

const app = express();
const port = process.env.PORT || 3000;
app.set("view engine", "ejs");

app.use(
  require("express-session")({
    secret: "this is a real secret sentence",
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", function(req, res) {
  res.render("home");
});

app.get("/secret", function(req, res) {
  res.render("secret");
});

app.listen(port, function() {
  console.log("SERVER STARTED.....");
});
