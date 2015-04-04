var React = require('react');

var Header = React.createClass({

	render: function () {
		return (
			<header className="app__header">
				<div className="app__container">
					<h1>React-Boilerplate</h1>
				</div>
			</header>
		);
	}

});

module.exports = Header;
