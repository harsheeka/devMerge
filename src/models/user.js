const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName : {
        type: String,
    },
    lastName : {
        type: String,
    },
    age : {
        type: Number,
    },
    gender : {
        type: String,
    },
    emailID : {
        type: String,
    },
});

module.exports = mongoose.model("User",userSchema);