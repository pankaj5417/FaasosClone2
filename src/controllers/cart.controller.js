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


router.get("/:id", async (req, res) => {
  try {
    const cart = await Cart.find({ userId: req.params.id }).populate("products");

    return res.status(200).json(cart);


  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
})

router.patch("/:id/:pid", async (req, res) => {
  try {
    console.log("hello")
    const removed = await Cart.updateOne({ userId: req.params.id }, { $pullAll: { products: [req.params.pid] } });


    console.log(removed)
    return res.status(200).json(cart);


  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
})



module.exports = router
