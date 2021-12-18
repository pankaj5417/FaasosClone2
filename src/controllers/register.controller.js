
  const express = require("express");
  //let ejs=require("ejs")
  
  const router = express.Router();
  
  
  router.get("/new", async(req, res)=>{
    return res.render("products/new")
  })

  router.get("/", async(req, res)=>{
    return res.render("products/landing")
  })

  
  
  module.exports = router;
  