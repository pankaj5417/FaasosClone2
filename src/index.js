const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");


const { register, login } = require("./controllers/auth.controller");

const cartController=require("./controllers/cart.controller")



const productController = require("./controllers/product.controller");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
//


// parse application/json
// 

app.use(express.json());

app.post("/register", register);
app.post("/login", login);


app.use(express.urlencoded({ extended: false }))

app.use(express.static("public"))
app.set("view engine", "ejs")



app.use("/products", productController);

app.use("/cart", cartController)

module.exports = app;
