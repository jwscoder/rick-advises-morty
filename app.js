const express = require("express");
const request = require("request");
const axios = require("axios");
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
  console.log(res.body);
    request('https://api.adviceslip.com/advice', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      let advice = JSON.parse(body).slip.advice;
      res.render("index", {advice:advice});
    } else {
      console.log(error);
    }
  });
});

app.listen("3000", function(){
  console.log("api server started on port 3000");
});
