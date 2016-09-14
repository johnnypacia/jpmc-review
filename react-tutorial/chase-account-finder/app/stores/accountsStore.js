console.log("AccountStore js Linked");

var dispatcher = require("../dispatcher");

function AccountStore() {
	var listeners = [];
	var accounts = [{ name: "Lovedale", tagline:"A wonderful school" }, 
                    { name: "Bishop",tagline:"An awesome school" }, 
                    { name: "Daffodils", tagline:"An excellent school" }];

    function getAccounts(){
    	return accounts;
    }

    function onChange(listener) {
    	listeners.push(listener);
    }

    function addAccount(account) {
    	accounts.push(account)
    	triggerListeners();
    }

    function deleteAccount(account) {
    	var _index;
    	accounts.map(function (a, index) {
    		if (a.name === account.name) {
    			_index = index;
    		}
    	});
    	accounts.splice(_index, 1);
    	triggerListeners();
    }

    function triggerListeners() {
    	listeners.forEach(function (listener) {
    		listener(accounts);
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
    	getAccounts: getAccounts,
    	onChange: onChange
    }
}

module.exports = AccountStore();
