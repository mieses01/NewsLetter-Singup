//Mr.CRUD     27/12/2022
const express = require("express");
const bodyparser = require("body-parser");
const request = require("request");
const https = require("https");

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
  const firstname = req.body.fname;
  const lastname = req.body.lname;
  const mail = req.body.email;
  const data = {
    members : [
      {
        email_address : mail,
        status: "subscribed",
        merge_fields :{
          FNAME: firstname,
          LNAME: lastname

        }
      }
    ]
  };
  const url = "https://us18.api.mailchimp.com/3.0/lists/73bf89de0b";
  const jsonData = JSON.stringify(data);

  const options = {
    method: "POST",
    auth: "mmieses01:5ee5584152a28182d557052d5dc76f61-us18"
  }
  console.log(url);
  const request = https.request(url, options, function(response){
    response.on("data", function(data){
      console.log(JSON.parse(data))
    })

  })
  request.write(jsonData);
  request.end();
});
//app listen
app.listen(3000,function(){
  console.log("Running in port 3000");
});

// 5ee5584152a28182d557052d5dc76f61-us18
// 73bf89de0b
