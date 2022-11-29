//Mr.CRUD     27/12/2022
const express = require("express");
const bodyparser = require("body-parser");
const request = require("request");

const app = express();


//codigo
// Static Files
app.use(express.static("static"));
//body prase
app.use(bodyparser.urlencoded({extended:true}));
//get with template
app.get("/",function(req, res){
  res.sendFile(__dirname+"/singup.html");
});

app.post("/",function(req, res){
  var firstname = req.body.fname;
  var lastname = req.body.lname;
  var mail = req.body.email;
  console.log(firstname,lastname,mail);
});
//app listen
app.listen(3000,function(){
  console.log("Running in port 3000");
});
