console.log(" AddAccount jsx linked");

var React = require("react");
var actions = require("../actions/AccountActions");

module.exports = React.createClass({
	getInitialState:function(){
		return {
			name:"",
			tagline:""
		}
	},
	addAccount:function(e){
		e.preventDefault();
		actions.addAccount(this.state);
	},
	handleInputChange:function(e){
		e.preventDefault();
		var name = e.target.name;
		var state = this.state;
		state[name] =e.target.value;
		this.setState(state);
	},
	render:function(){
		return(
			<form className="form" onSubmit={this.addAccount}>


				<div className="form-group">
                    <label className="control-label" htmlFor="name">Account Name:</label>
                    <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="Account Name" />                    
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="tagline">Tagline:</label>
                    <input type="text" className="form-control" id="tagline" name="tagline" value={this.state.address} onChange={this.handleInputChange} placeholder="Tagline" />                    
                </div>
                <div className="form-group">
                    <button className="btn" type="submit">Add Account</button>
                </div>
			</form>
		)
	}
});