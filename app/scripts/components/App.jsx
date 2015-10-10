var React    = require('react'),
	Router   = require('react-router'),
	Header   = require('./elements/Header'),
	Footer   = require('./elements/Footer');

var App = React.createClass({

	contextTypes: {
		location: React.PropTypes.object
	},

	propTypes: {
		children: React.PropTypes.object.isRequired
	},

	render () {
		return (
			<div className="app">
				<Header />
				<main className="app__content">
					<div className="app__container">
						{this.props.children}
					</div>
				</main>
				<Footer />
			</div>
		);
	}
});

module.exports = App;
