const mongoose = require("mongoose");


const addressSchema = new mongoose.Schema({
       house:{type:String, required:false},
       landmark:{type:String, required:false}
    },
    {
        versionKey: false,
        timestamps: true
})


module.exports = mongoose.model("address", addressSchema);

