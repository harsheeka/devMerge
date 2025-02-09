const express = require("express"); 
const adminAuth = require("./middlewares/auth");
const connectDB = require("./config/database");
const User = require("./models/user");
const app = express();
const validator = require("validator");

app.use(express.json());

app.get("/user", async (req,res) => {
    try{
        const userfirstName = req.body.firstName;
        const users = await  User.find({
            firstName : userfirstName
        })
        if(users.length===0){
            res.status(404).send("User not found");
        }
        else{
            res.send(users);
        }
        
    }
    catch(err) {
        res.status(404).send("Some error occured");
    }
})
app.delete("/user", async (req,res) => {
    try{
        const userID = req.body.userID;
        const user = await User.findByIdAndDelete(userID);
        res.status(200).send("User Deleted Successfully");

    }catch(err) {
        res.status(404).send("Some error occured");
    }
})

app.patch("/user/:userID", async (req,res)=> {
    try{
        const userID = req.params?.userID;
        const data = req.body;
        const ALLOWED_UPDATES = ["userID","photoUrl","about","age","gender","skills"];

        if(Array.isArray(data?.skills) && data.skills.length > 10){
            return res.send("Skills can't be more than 10");
        }

        if(!userID){
            return res.send("UserID is required");
        }
        const isUpdateAllowed = Object.keys(data).every(k=> ALLOWED_UPDATES.includes(k));
        if(!isUpdateAllowed){
            res.status(404).send("Update is not allowed");
        }
        await User.findByIdAndUpdate(userID,data, {runValidators: true,});
        res.status(200).send("User Updated Successfully");

    }catch(err) {
        if (!res.headersSent) { // Prevents multiple responses
            res.status(500).json({ error: "Internal Server Error", details: err.message });
        }
    }
})

app.get("/feed", async (req,res)=> {
    try{
        const users = await User.find({});
        if(users.length==0){
            res.status(404).send("Users not found");
        }
        else{
            res.status(200).send(users);
        }
    }
    catch(err) {
        res.send(404).send("Error occured");
    }
})


app.post("/signup", async (req,res)=>{
    try{
        const user = User(req.body);
    await user.save();
    res.send("User Added Sucessfully");
    } catch(err){
        res.send("Error:"+err);
    }
    
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

