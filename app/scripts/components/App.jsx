var React  = require('react'),
	Router = require('react-router'),
	Header = require('./elements/Header');

var RouteHandler = Router.RouteHandler;

var App = React.createClass({
	render: function () {
		return (
			<div className="app">
				<Header/>
				<main className="app__content">
					<RouteHandler/>
				</main>
			</div>
		);
	}

});

module.exports = App;
