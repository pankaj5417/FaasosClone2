const mongoose = require("mongoose");

const connect = () =>{
    return mongoose.connect("mongodb+srv://pankajkumar541:pk123@cluster0.oc3m3.mongodb.net/product-database")
}

module.exports = connect
