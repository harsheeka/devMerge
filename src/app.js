const express = require("express"); 
const adminAuth = require("./middlewares/auth");
const app = express();

app.use("/admin", adminAuth, (req,res)=>{
    res.send("hello");
});

app.use("/", (err,req,res,next)=>{
    if(err){
        res.status(500).send("error found");
    }
})

app.listen("7777", ()=> {
   console.log("Server is listening");
});