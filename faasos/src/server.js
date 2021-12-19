const express = require("express");
const connect = require("./configs/db");
// const ejs = require("ejs")


const checkoutController = require("./controllers/checkout.controller");
const productController = require("./controllers/product.controller");
const paymentController = require("./controllers/paymentpage.controller")






const app = express();
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));


var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




app.use("/checkouts", checkoutController);
app.use("/products", productController)
app.use("/payments", paymentController)







app.listen(2809, async () => {
    await connect ();
    console.log("Listening to port 2809");
})