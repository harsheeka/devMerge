const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required: true,
        minLength : 2,
        maxLength : 10,
    },
    lastName : {
        type: String,
    },
    age : {
        type: Number,
        min : 12,
    },
    gender : {
        type: String,
        validate(value) {
            if(![male,female,other].includes(value)){
                throw new Error("Gender data is not valid");
            }
        },
    },
    emailID : {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    about : {
        type: String,
        default: "This is default about",
    },
    skills : {
        type: [String],
    },
    photoUrl : {
        type: String,
        default: "https://img.freepik.com/free-psd/contact-icon-illustration-isolated_23-2151903337.jpg?t=st=1738485039~exp=1738488639~hmac=a6d4ad150136d5c05c4ed5650a2f58e17b1c3b0fb961bc89eb9f7ecdf39afc06&w=740"
    }
});

module.exports = mongoose.model("User",userSchema);