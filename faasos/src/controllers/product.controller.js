const express = require("express");
const path= require("path")
//let ejs=require("ejs")


const Product = require("../models/product.model");

const Checkout = require("../models/checkout.model")


const router = express.Router();

router.get("", async(req, res)=>{

  const products = await Product.find().lean().exec()
//   console.log('products:', products)
//  return res.status(201).send(products)

  return res.render("products/productpage",{ products })

  // return res.status(200).send(products)


})

router.post("", async (req, res)=>{

    const product = await Product.create(req.body)

    return res.status(200).send(product)

    // return res.render("products/productpage",{ products })
})


module.exports = router;