const express = require("express"); 

const app = express();

app.use("/user",(req,res,next)=>{
    res.send("response 1");
    next();
},
(req,res)=>{
    res.send("response 2");
});

app.listen("7777", ()=> {
   console.log("Server is listening");
});