const mongoose = require("mongoose");

const connectDb = (url)=>{
  return mongoose
  .connect(url , {
    useCreateIndex :true,
    useFindAndModify : false ,
    useNewUrlParser:true,
    useUnifiedTopology : true,
  })
}


module.exports = connectDb;

