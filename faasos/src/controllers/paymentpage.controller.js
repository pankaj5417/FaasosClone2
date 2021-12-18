const express = require("express");

const router = express.Router();


router.get("",  (req, res)=>{

    res.render("paymentpage/paymentafterpage.ejs")
    // res.status(200).send("done")
})


module.exports = router