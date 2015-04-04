var React = require('react/addons'),
	NPMPackage = require('../../../../package.json');

var Header = React.createClass({

	render: function () {
		return (
			<header className="app__header">
				<div className="app__container">
					<h1>{NPMPackage.title}</h1>
				</div>
			</header>
		);
	}

});

module.exports = Header;
