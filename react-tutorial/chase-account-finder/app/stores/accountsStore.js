console.log("AccountStore js Linked");

var dispatcher = require("../dispatcher");
var accountService = require("../services/accountService");


function AccountStore() {
	var listeners = [];
	var accounts = [{ name: "Lovedale", tagline:"A wonderful school" }, 
                    { name: "Bishop",tagline:"An awesome school" }, 
                    { name: "Daffodils", tagline:"An excellent school" }];


    function onChange(listener) {
    	getAccounts(listener);
    	listeners.push(listener);
    }

    function getAccounts(){
    	accountService.getAccounts().then(function (res){
    		(res);
    	});	
    }

    function addAccount(account) {
    	accountService.addAccount(account).then(function (res){
    		console.log(res);
    		triggerListeners();
    	});
    }

    function deleteAccount(account) {
    	accountService.deleteAccount(account).then(function (res){
    		console.log(res);
    		triggerListeners();
    	});
    }

    function triggerListeners() {
    	getAccounts(function (res) {
    		listeners.forEach(function (listener) {
    			listener(accounts);
    		});
    	});
    }

    dispatcher.register(function (payload) {
    	var split = payload.type.split(":");
    	if (split[0] === "account") {
    		switch (split[1]) {
    			case "addAccount":
    				addAccount(payload.account);
    				break;
    			case "deleteAccount":
    				deleteAccount(payload.account);
    				break;
    		}
    	}
    });

    return {
    	onChange: onChange
    }
}

module.exports = AccountStore();
