const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const https = require("https");

// this is a folder for including static files in website
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function (req, res) {
  res.sendFile(__dirname+"/signup.html")
});

app.post("/",function(req,res){
    var fName = req.body.firstName;
    var lName = req.body.lastName;
    var email = req.body.email;
    res.send("information recieved");
    var message = {
      members:[
        {
          email_address : email,
          status: "subscribed",
          merge_fields:{
            FNAME: fName,
            LNAME:lName
          }
        }
      ]
    };

    
const data = JSON.stringify(message);
   const url = "https://us21.api.mailchimp.com/3.0/lists/e2af7d83ba"
   const options = {
        auth:"vishwajeet:c24950c0cb790fb9723203ad6ecf8157-us21",
        method:"POST"
   }
   const request = https.request(url,options,function(response){
      response.on("message",function(message){
        console.log(message);
      })
   })

   request.write(data);
   request.end();
console.log(req.body);
});
const port = process.env.PORT || 80;
app.listen(port, function () {
  console.log("server is running on port 3000");
});
