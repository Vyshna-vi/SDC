const Mongoose=require("mongoose")
const env = require("dotenv")

// Mongoose.connect(process.env.dbUrl)

// var options = {
//     keepAlive: true,
//     connectTimeoutMS: 30000,
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//     useCreateIndex: true, 
//   };
//   Mongoose.connect(process.env.dbUrl, options, (err) => {
//     if (err) return 
//   });