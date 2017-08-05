var React = require('react');

var ErrorModal= React.createClass({
	componentDidMount: function (){
		var modal = new Foundation.Reveal($('#error-modal'));
		modal.open();
	},
	render: function (){
		return(
			<div id="error-modal" className="reveal tiny text-center" data-reveal="">
				<h4>Some title</h4>
				<p>Error city not found</p>
				<p><button className="button hollow" data-close="">Okay</button></p>				
			</div>
			);
	}
});
module.exports= ErrorModal;