const express = require("express");
const path= require("path")
//let ejs=require("ejs")


const Product = require("../models/product.model");


const router = express.Router();

// router.get("/", async(req, res)=>{

//   const products= await Product.find().lean().exec()
//  // return res.status(201).send(products)

//   return res.render("products/productpage",{ products })

// })

// router.get("/new", async(req, res)=>{
//   return res.render("products/new")
// })



// router.get("/:id", async(req, res)=>{

//   const products= await Product.findById(req.params.id).lean().exec()

//   return res.render("products/single",{ products })

// })


router.post("", async (req, res)=>{

  const products=await Product.create()
  //return res.render("products/single",{products})

   return res.redirect(`/products/${products._id}`)
})


router.get("", async (req, res) => {
    const products = await Product.find().lean().exec();
   
    
    return res.render('productpage/productpage.ejs', {
        products,
        
    });
})






module.exports = router;