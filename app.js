//Mr.CRUD     27/12/2022
const express = require("express");
const bodyparser = require("body-parser");
const request = require("request");

const app = express();


//codigo
app.use(express.static("static"));

app.get("/",function(req, res){
  res.sendFile(__dirname+"/singup.html");
})

app.listen(3000,function(){
  console.log("Running in port 3000");
})
