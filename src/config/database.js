const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://harshika:zal4qrG5Q059tQ3r@nodejsproject.i310n.mongodb.net/devMerge?retryWrites=true&w=majority");
    }
    catch (error) {
        console.log("couldnt connect ");
    }
};

module.exports = connectDB;
