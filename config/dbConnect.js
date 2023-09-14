// const mongoose = require("mongoose");

// const DB = process.env.DATABASE

// mongoose.connect(DB,{
//     useUnifiedTopology:true,
//     useNewUrlParser:true
// }).then(()=> console.log("Database Connect")).catch((err)=>{
//     console.log(err);
// })





const mongoose = require('mongoose');
process.env.DEBUG = 'mongoose:*';

const DB = process.env.DATABASE

// Database connection function
async function connectToDB() {
  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to the database');
    return mongoose.connection;
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
    throw error;
  }
}

module.exports = connectToDB;