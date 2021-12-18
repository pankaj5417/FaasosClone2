require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");



const details =require("../middlewares/upload")

const { body, validationResult } = require('express-validator');


const register =  async  (req, res) =>{
  
  try {
    const errors=validationResult(req);
        if(!errors.isEmpty()){
            let a=errors.array().map(({msg,param,location})=>{
                return {
                    [param]:msg
                }
        })
        return res.status(400).json({errors: a});
    }
    // check if the email address provided already exist

     user = await User.findOne({ email: req.body.email }).lean().exec();

    // if it already exists then throw an error
    if (user)
      error =  res.status(400).json({

const register = async (req, res) => {
  try {
    // check if the email address provided already exist
    let user = await User.findOne({ email: req.body.email }).lean().exec();

    // if it already exists then throw an error
    if (user)
      return res.status(400).json({


    // else we will create the user we will hash the password as plain text password is harmful

    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
    }
      
    );
    

    // we will create the token
    const token = newToken(user);
    
    
    // return the user and the token
    return res.redirect("/products")
  } catch (e) {
    return res.status(500).json({ status: "suman", message: e.message });
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
        return res.status(400).json({errors: a});
    }
    
    // check if the email address provided already exist
     user = await User.findOne({ phone: req.body.phone });

    // if it does not exist then throw an error
    if (!user){
      
       

      
    }
    
   
    user = await User.create(req.body);

    // we will create the token
    const token = newToken(user);

    // return the user and the token
    res.status(201).json({ user, token });
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
};

const login = async (req, res) => {
  try {
    // check if the email address provided already exist
    let user = await User.findOne({ phone: req.body.phone });

    // if it does not exist then throw an error
    if (!user)
      return res.status(400).json({
        status: "failed",
        message: " Please provide correct email address and password",
      });


    

    // if it matches then create the token
    const token = newToken(user);
  
   
    // return the user and the token
     res.redirect("/products")
    

=======


    // if it matches then create the token
    const token = newToken(user);

    // return the user and the token
    res.status(201).json({ user, token });




module.exports = { register, login,details };



