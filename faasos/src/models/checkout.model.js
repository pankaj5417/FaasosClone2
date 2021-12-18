const mongoose = require("mongoose");

// Create Product Schema
const checkoutSchema = new mongoose.Schema({
      
    },
    {
        versionKey: false,
        timestamps: true
})

// Connect the Product schema to collections
const Checkout = mongoose.model("checkout", checkoutSchema);

module.exports = Checkout;