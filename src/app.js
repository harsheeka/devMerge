const express = require("express"); 

const app = express();

app.get("/user",(req,res)=>{
    res.send({
        firstname: "harshika", lastname: "arya"
    });
});

app.post("/user",(req,res)=>{
    res.send("Data added successfully");
});

app.delete("/user",(req,res)=>{
    res.send("data deleted sucessfully")
});

app.patch("/user",(req,res)=>{
    res.send("Updated sucessfully");
});

app.use("/test",(req,res)=>{
    res.send("Routes are working");
});

app.listen("7777", ()=> {
   console.log("Server is listening");
});