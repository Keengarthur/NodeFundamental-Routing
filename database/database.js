const mongoose = require('mongoose')

const connectDb = (uri)=>{
   return mongoose.connect(uri,{
       useNewUrlParser:true,
       useCreateIndex:true,
       useUnifiedTopology:true,
       useFindAndModify:false
   })
}

module.exports = connectDb