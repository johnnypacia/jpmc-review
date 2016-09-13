var React = require("react");
var AccountInfo = require("./AccountInfo.jsx");
var ReactDom = require("react-dom");
var Reactify = require("reactify");


module.exports = React.createClass({
	render:function(){
		return(
			<div className="row">
			    <div className="col-md-6">
                    //We will add addAccount functionality here
                </div>
                <div className="col-md-6">
                    {
                        this.props.accounts.map(function(s,index){
                            return(
                                <AccountInfo info={s} key={"accounts"+index} />
                            )         
                        })
                    }
                </div>
			</div>
		)
	}
})