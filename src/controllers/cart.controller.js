const express = require("express");

const Cart = require("../models/cart.model");

//const authenticate = require("../middlewares/authenticate");

const router = express.Router();


router.post("", async (req, res) => {
   

  
  try {
  
    console.log("pawan")
    console.log(req.body)
    res.send(req.body);
} catch (err) {
  console.log(err);
  res.status(500).send("Something went wrong");
}
});
module.exports=router
