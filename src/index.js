const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");

const checkoutController = require("./controllers/checkout.controller");
const paymentController = require("./controllers/paymentpage.controller")


const userController = require("./controllers/register.controller");
const { register, login } = require("./controllers/auth.controller");

const cartController = require("./controllers/cart.controller")





const productController = require("./controllers/product.controller");



const { body, validationResult } = require('express-validator');

const app = express();
app.use(express.json());




app.use(express.json());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/register",
    body("phone").isLength({ min: 10 }).withMessage("phone length must be at least 10 characters"),
    body('email').isEmail().normalizeEmail(),
    body("name").isLength({ min: 3, max: 10 }).withMessage("name is required and has to be at least 3 characters"),
    register);


app.post("/login", body("phone").isLength({ min: 10 }).withMessage("phone length must be at least 10 characters"),
    login);

    app.use("/checkouts", checkoutController);
    app.use("/payments", paymentController)
    
app.use(express.urlencoded({ extended: false }))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
//


// parse application/json
// 


app.post("/register",
    body("phone").isLength({ min: 10 }).withMessage("phone length must be at least 10 characters"),
    body('email').isEmail().normalizeEmail(),
    body("name").isLength({ min: 3, max: 10 }).withMessage("name is required and has to be at least 3 characters"),
    register);


app.post("/login", body("phone").isLength({ min: 10 }).withMessage("phone length must be at least 10 characters"),
    login);


app.use(express.urlencoded({ extended: false }))


app.use(express.urlencoded({ extended: false }))

app.use(express.static("public"))
app.set("view engine", "ejs")



app.use("/", userController);
app.use("/products", productController);
app.get("/login", login)




app.use("/cart", cartController)

module.exports = app;
