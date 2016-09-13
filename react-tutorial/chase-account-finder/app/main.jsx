var React = require("react");
var ReactDOM = require("react-dom");
var AccountsList = require("./components/AccountsList.jsx");



var _accounts = [{name:"Lovedale",tagline:"this is a wonderful Chase account"}, {name:"Bishop",tagline:"Another great  Chase account"}];

function render(){
	ReactDOM.render(<AccountsList accounts={_accounts} />, document.getElementById("container"));
}

render();