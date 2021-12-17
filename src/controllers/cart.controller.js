const express = require("express");

const Cart = require("../models/cart.model");

//const authenticate = require("../middlewares/authenticate");

const router = express.Router();


router.post("/", async (req, res) => {
    const { productId, quantity, name, price } = req.body;

const userId = "61bc12cd8c22250b9b72a285"; 

try {
  let cart = await Cart.findOne({ userId });

  if (cart) {
    
    let itemIndex = cart.products.findIndex(p => p.productId == productId);

    if (itemIndex > -1) {
      
      let productItem = cart.products[itemIndex];
      productItem.quantity = quantity;
      cart.products[itemIndex] = productItem;
    } else {
      
      cart.products.push({ productId, quantity, name, price });
    }
    cart = await cart.save();
    return res.status(201).send(cart);
  } else {
    
    const newCart = await Cart.create({
      userId,
      products: [{ productId, quantity, name, price }]
    });

    return res.status(201).send(newCart);
  }
} catch (err) {
  console.log(err);
  res.status(500).send("Something went wrong");
}
});
module.exports=router
