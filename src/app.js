const express = require("express"); 
const adminAuth = require("./middlewares/auth");
const connectDB = require("./config/database");
const User = require("./models/user");
const app = express();

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

