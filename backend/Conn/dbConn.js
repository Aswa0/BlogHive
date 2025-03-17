const mongoose = require("mongoose");
require("dotenv").config({path: "../.env"});

const dbConn = async () => {
    try{
        mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB Connected Successfully");
    }catch(error){
        console.log(error);
    }
}

module.exports = dbConn;