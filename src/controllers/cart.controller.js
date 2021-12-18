const express = require("express");

const Cart = require("../models/cart.model");

//const authenticate = require("../middlewares/authenticate");

const router = express.Router();


router.post("", async (req, res) => {
   

  
  try {
    const user = await Cart.findOne({ userId: req.body.userId }).lean().exec();
    console.log("found", user);
    if (user) {
      let addedtocart = await Cart.updateOne({ userId: user.userId }, { $push: { products: req.body.products } }).lean().exec();
      return res.json({ added: addedtocart });
    }
    else {
      const user = Cart.create(req.body);
      return res.json({ usertocart: user });
    }
} catch (err) {
  console.log(err);
  res.status(500).send("Something went wrong");
}
});
module.exports=router
