const express = require("express"); 
const adminAuth = require("./middlewares/auth");
const connectDB = require("./config/database");
const User = require("./models/user");
const app = express();

app.use(express.json());

app.post("/signup", async (req,res)=>{
    const user = User(req.body);
    await user.save();
    res.send("User Added Sucessfully");
})


connectDB()
.then(
    ()=>{
        console.log("database connected sucessfully");
        app.listen(7777, ()=> {
            console.log("Server is listening");
         });

    }
);

