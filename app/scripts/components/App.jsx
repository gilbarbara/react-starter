var React  = require('react'),
	Router = require('react-router'),
	Header = require('./elements/Header'),
	Footer = require('./elements/Footer');

var RouteHandler = Router.RouteHandler;

var App = React.createClass({

	contextTypes: {
		router: React.PropTypes.func
	},

	render () {
		return (
			<div className="app">
				<Header/>
				<main className="app__content">
					<div className="app__container">
						<RouteHandler/>
					</div>
				</main>
				<Footer/>
			</div>
		);
	}

});

module.exports = App;
