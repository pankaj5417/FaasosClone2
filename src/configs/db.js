const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(process.env.MongoURL,{
    //useNewUrlParser:true,
    //useUnifiedTopology:true,
    //useCreateIndex:true,
    
  });
};
