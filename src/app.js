const express = require("express"); 
const adminAuth = require("./middlewares/auth");
const connectDB = require("./config/database");
const User = require("./models/user");

const app = express();
connectDB()
.then(
    ()=>{
        console.log("database connected sucessfully");
        app.listen(7777, ()=> {
            console.log("Server is listening");
         });

    }
);

app.post("/signup", async (req,res)=>{
    const userObj = {
        firstName : "Harshika",
        lastName : "Arya",
        age : 21,
        gender : "F",
    };
    const user = User(userObj);
    await user.save();
    res.send("User Added Sucessfully");
})

