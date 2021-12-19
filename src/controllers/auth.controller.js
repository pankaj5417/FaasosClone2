require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const Product = require("../models/product.model");
let data = [];
const details =require("../middlewares/upload")
const { body, validationResult } = require('express-validator');
const newToken = (user) => {
  return jwt.sign({ user: user }, process.env.JWT_ACCESS_KEY);
};
const register =  async  (req, res) =>{
  try {
    const errors=validationResult(req);
        if(!errors.isEmpty()){
            let a=errors.array().map(({msg,param,location})=>{
                return {
                    [param]:msg
                }
        })
        return res.render('products/Landing.ejs'
,{status:false,message: a});
    }
    // check if the email address provided already exist
     user = await User.findOne({ email: req.body.email }).lean().exec();
    // if it already exists then throw an error
    if (user)
      error =  res.render('products/Landing.ejs'
,{
      
        message: "Please provide a different email address",
      });
    // else we will create the user we will hash the password as plain text password is harmful
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
    }
    );
    data.push(user)
    // we will create the token
    const token = newToken(user);
    // return the user and the token
    return res.render('products/Landing.ejs'
,{user,message:"You can login now"});
  } catch (e) {
    return res.render('products/Landing.ejs'
,{ message: e.message });
  }
};
var error;
const login = async (req, res) => {
  try {
    const errors=validationResult(req);
        if(!errors.isEmpty()){
            let a=errors.array().map(({msg,param,location})=>{
                return {
                    [param]:msg
                }
        })
        return res.status(400).json({status: false,message:a});
    }
    // check if the email address provided already exist
    user = await User.findOne({ phone: req.body.phone });
  
     data.push(user)
    // if it does not exist then throw an error
    if (!user){
    }
    // else we match the password
    // if not match then throw an error
    // if it matches then create the token
    const token = newToken(user);
  const products = await Product.find()
  res.render("products/productpage.ejs",{products,user})
    // return the user and the token
    return res.status(201).json({user});
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
};
console.log(data)
module.exports = { register, login,data };
