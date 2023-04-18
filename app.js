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
    // var message = {
    //   members:[
    //     {
    //       email_address : email,
    //       status: "subscribed",
    //       merge_fields:{
    //         FNAME: fName,
    //         LNAME:lName
    //       }
    //     }
    //   ]
    // };

    console.log(req.body);


});

app.listen(3000, function () {
  console.log("server is running on port 3000");
});
