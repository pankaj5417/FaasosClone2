const express = require("express");
const multer = require("multer")
const path = require("path")
//let ejs=require("ejs")
const upload = require("../middlewares/upload")
const User = require("../models/user.model");


const Product = require("../models/product.model");

//const Cart = require("../models/cart.model");

//const authenticate = require("../middlewares/authenticate");

const router = express.Router();

router.get("/", async (req, res) => {

  const products = await Product.find().lean().exec()


  // return res.status(201).send(products)
  

  return res.render("products/productpage", { products ,user})

})



router.get("/single/:id", async (req, res) => {

  try {

    const product = await Product.findById(req.params.id).lean().exec();

    return res.render("products/singleProduct", {
      product
    });

  } catch (e) {

    return res.status(500).json({ message: e.message });


  }

})

router.get("/product/:uid", async (req, res) => {
  const products = await Product.find().lean().exec();

  console.log("product controller",req.params.uid)
  const user = await User.findOne({_id:req.params.uid }).lean().exec();
  console.log("user", user);


  return res.render("products/productpage", { products, user });
});






router.get("/:id", async (req, res) => {

  const products = await Product.findById(req.params.id).lean().exec()

  return res.render("products/single", { products })

})

//   return res.redirect(`/products/${products._id}`)
// })

// router.post("/", authenticate, async (req, res) => {
//   try {
//     const user = req.user;

//     const product = await Product.create({
//       name: req.body.name,
//       price: req.body.price,
//       image_urls: ["www.google.com"],
//       user: user.user._id,
//     });

//     return res.status(201).json({ product });
//   } catch (e) {
//     return res.status(500).json({ status: "failed", message: e.message });
//   }
// });

// router.get("/", async (req, res) => {
//   const products = await Product.find().lean().exec();

//   return res.send(products);
// });
// */
module.exports = router;
