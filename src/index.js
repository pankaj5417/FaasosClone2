const express = require("express");
let ejs=require("ejs")

const { register, login } = require("./controllers/auth.controller");



const productController = require("./controllers/product.controller");

const app = express();

app.use(express.json());

app.post("/register", register);
app.post("/login", login);


app.use(express.urlencoded({extended: false }))
app.use(express.static("public"))
app.set("view engine","ejs")



app.use("/products", productController);

module.exports = app;
