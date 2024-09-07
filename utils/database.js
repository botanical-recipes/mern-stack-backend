const mongoose = require("mongoose");
const connectDB = async() => {
  try{
    await mongoose.connect("mongodb+srv://hanaya3t:taiyaki83@cluster0.befga.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0");
      console.log("Success: Connected to MongoDB");
  }catch(err){
    console.log("Failure unconnected to MongoDB");
    throw new Error();
  }
}

module.exports = connectDB;



//hanya3t   taiyaki83