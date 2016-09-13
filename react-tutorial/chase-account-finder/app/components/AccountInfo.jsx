var React = require( "react");
var ReactDom = require("react-dom");
var Reactify = require("reactify");


modules.exports = React.createClass({
	render:function(){
		return(
			<div className="panel panel-default">
				<div className="panel-heading">
					{this.props.info.name}
				</div>
				<div className="panel-body">
					{this.props.info.tagline}
				</div>
			</div>
		)
	}
})