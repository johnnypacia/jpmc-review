var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");

//controller

var accountController = require("./controllers/accountController");

//express request pipeline

var app = express();
app.use(express.static(path.join(__dirname,"../app/dist")));
app.use(bodyParser.json());
app.use("/api", accountController);


app.listen(7777,function(){
    console.log("Started listening on port", 7777);
});

// connect to mongodb
mongoose.connect("mongodb://localhost/accountFinder");