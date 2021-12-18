const express = require("express");

const Checkout = require("../models/checkout.model");

const Address = require("../models/address.model");

const Product = require("../models/product.model")

const router = express.Router();


// post:- Create a product
router.post("", async (req, res) => {
    const address = await Address.create(req.body);

    return res.render('checkout/checkout.ejs', {
        address,
        
    });

    
})




// get:- get all the Products details
router.get("", async (req, res) => {
    const checkouts = await Checkout.find().lean().exec();
    const address = await Address.find().limit(1).lean().exec();
    const product = await Product.find().lean().exec();
    

    
    
    return res.render('checkout/checkout.ejs', {
        checkouts,
        address,
        product
        
    });

    // return res.status(200).send(product)
})











module.exports = router