const express = require("express");

const Checkout = require("../models/checkout.model");

const router = express.Router();

//......APIs for Product........//
// post:- Create a product
router.post("", async (req, res) => {
    const checkout = await Checkout.create(req.body);

    return res.status(201).send({checkout});
})



// get:- get all the Products details
router.get("", async (req, res) => {
    const checkouts = await Checkout.find().lean().exec();
    // const dailySpecial = await Product.find({offer: "daily special"}).populate("brand").populate("category").populate("sizes").limit(4).lean().exec();
    // const bestDeal = await Product.find({offer: "best deal"}).populate("brand").populate("category").populate("sizes").limit(4).lean().exec();
    // const antiAging = await Product.find({offer: "anti-aging"}).populate("brand").populate("category").populate("sizes").limit(4).lean().exec();

    return res.render('checkout/checkout.ejs', {
        checkouts,
        
    });
})




// // patch:- Update a Product
// router.patch("/:id", async (req, res) => {
//     const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true}).lean().exec();
    
//     return res.status(200).send({product});
// })

// router.get("/category/:id", async (req, res) => {
//     const prod = await Product.find({ category: req.params.id }).populate("brand").populate("category").populate("sizes").lean().exec();
   
//     res.render("products/makeUp.ejs", {
//         prod: prod
//     })
// })

// router.get("/:id", async (req, res) => {
//     const product = await Product.findById(req.params.id).populate("brand").populate("category").populate("sizes").lean().exec()

//     res.render("products/p2.ejs", {
//         product: product
//     })
// })

// router.get("", async (req, res) => {

//     res.render("addToCart.ejs")
// })





module.exports = router