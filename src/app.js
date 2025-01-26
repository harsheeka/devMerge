const express = require("express"); 
const adminAuth = require("./middlewares/auth");
const connectDB = require("./config/database");

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

app.use("/admin", adminAuth, (req,res)=>{
    res.send("hello");
});

app.use("/", (err,req,res,next)=>{
    if(err){
        res.status(500).send("error found");
    }
})

