const express = require("express");

const app = express();


app.use("/test",(req,res)=>{
    res.send("Routes are working");
});
app.use("/hello",(req,res)=>{
    res.send("nodemon check");
});

app.use("/",(req,res)=>{
    res.send("Helloooo");
}); //generic routes to be added at last

app.listen("7777", ()=> {
   console.log("Server is listening");
});