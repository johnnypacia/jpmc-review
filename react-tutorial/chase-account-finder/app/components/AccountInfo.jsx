console.log("account info jsx linked");

var React = require("react");
var actions = require("../actions/AccountActions");

module.exports = React.createClass({

	deleteAccount: function(e){
		e.preventDefault();
		actions.deleteAccount(this.props.info);
	},
    render:function(){
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    {this.props.info.name}
                </div>
                <div className="panel-body">
                    {this.props.info.tagline}
                    <span className="pull-right text-uppercase delete-button" onClick={this.deleteAccount}>&times;</span>
                </div>
            </div>
        )
    }
});