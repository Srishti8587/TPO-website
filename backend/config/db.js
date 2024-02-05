const mongoose=require("mongoose");
const colors=require("colors");
const { MONGO_URL } = require('./serverConfig');

const connectDB = async()=>{
    try{
        await mongoose.connect(MONGO_URL);
        console.log(`Connected with MongoDB successfully ${mongoose.connection.host}`);
    }
    catch(error)
    {
        console.log("hey");
        console.log(`MongoDB connection Error ${error}`);
    }
};

module.exports=connectDB;