console.log("accounts list jsx linked");


var React = require("react");
var AccountInfo = require("./AccountInfo.jsx");
var AddAccount = require("./AddAccount.jsx");

module.exports = React.createClass({
	render:function(){
		return(
			<div className="row">
			    <div className="col-md-6">
			    	<AddAccount />
                </div>
                <div className="col-md-6">
                    {
                        this.props.accounts.map(function(a,index){
                            return(
                                <AccountInfo info={a} key={"accounts"+index} />
                            )         
                        })
                    }
                </div>
			</div>
		)
	}
});