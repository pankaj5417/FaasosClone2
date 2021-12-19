const mongoose = require("mongoose");

// Create Product Schema
const productSchema = new mongoose.Schema({
      name:{type:String, required:true},
      price:{type:Number, required:true}
    },
    {
        versionKey: false,
        timestamps: true
})

// Connect the Product schema to collections
module.exports  =  mongoose.model("checkoutdemos", productSchema);

