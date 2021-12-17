const express = require("express");
let ejs=require("ejs")



const productController = require("./controllers/product.controller");
const userController = require("./controllers/register.controller");

const { register, login, error } = require("./controllers/auth.controller");

const { body, validationResult } = require('express-validator');

const app = express();
console.log(error)


app.use(express.json());

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.post("/register",
    body("phone").isLength({min:12}).withMessage("phone length must be at least 12 characters")
,register);
app.post("/login", login);


app.use(express.urlencoded({extended: false }))
app.use(express.static("public"))
app.set("view engine","ejs")



app.use("/products", productController);
app.use("/user", userController);

module.exports = app;
