console.log("accountController js linked");

var mongoose = require("mongoose");
var Account = require("../data/account");
var _ = require("underscore");

var router = require("express").Router();
router.route("/accounts/:id?").get(getAccounts).post(addAccount).delete(deleteAccount);

function getAccounts(req, res){
	Account.find(function (err, accounts) {
		if (err)
			res.send(err);
		else
			res.json(accounts);
	});	
}

function addAccount(req, res){
	var account = new Account(_.extend({}, req.body));
	account.save(function (err){
		if (err)
			res.send(err);
		else
			res.json(account);
	});
}

function deleteAccount(req, res){
	var id = req.params.id;
	Account.remove({ _id: id }, function (err, removed){
		if (err)
			res.send(err)
		else
			res.json(removed);
	});
}

module.exports = router;