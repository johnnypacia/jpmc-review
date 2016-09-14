console.log("AccountActions js linked");

var dispatcher = require("../dispatcher");

module.exports = {
	addAccount : function(account){
		dispatcher.dispatch({
			account:account,
			type:"account:addAccount"
		});
	},
	deleteAccount : function(account){
		dispatcher.dispatch({
			account:account,
			type:"account:deleteAccount"
		});
	}
}