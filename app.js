const express= require("express");
const app = express();
const session = require("express-session");
const methodOverride = require("method-override");

const passport = require("passport");
const bcrypt = require("bcryptjs");
const {body, validationResult} = require("express-validator");
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(passport.session());
app.use(passport.initialize());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));

app.get("/", (req,res) => {
    res.render("index");
});

app.get("/sign-up", (req,res) => {
    res.render("signup");
});

app.listen(3000, () => console.log("App listening on port 3000"));
