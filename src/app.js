const express = require("express");

const app = express();

app.use((req,res)=>{
    res.send("Helloooo");
});

app.listen("7777", ()=> {
    "Server is listening"
});