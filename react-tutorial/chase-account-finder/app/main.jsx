console.log("main jsx linked");

var React = require("react");
var ReactDOM = require("react-dom");
var AccountsList = require("./components/AccountsList.jsx");
var accountsStore = require("./stores/accountsStore");
var _accounts = [];
var getAccountsCallback = function(accounts){
	_accounts = accounts;
	render();	
};

accountsStore.onChange(getAccountsCallback);


function render(){
	ReactDOM.render(<AccountsList accounts={_accounts} />, document.getElementById("container"));
}

render();


