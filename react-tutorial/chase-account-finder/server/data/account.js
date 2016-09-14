console.log("account js linked");

var mongoose = require("mongoose");
var accountSchema = mongoose.Schema({
	name: String,
	tagline: String
});

module.export = mongoose.model("account", accountSchema);