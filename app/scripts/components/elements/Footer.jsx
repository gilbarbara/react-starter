var React      = require('react/addons');

var Footer = React.createClass({
	mixins: [React.addons.PureRenderMixin],

	contextTypes: {
		router: React.PropTypes.func
	},

	render () {
		return (
			<footer className="app__footer">
				<div className="app__container">
					<h3>Powered by:</h3>

					<ul className="tech list-unstyled">
						<li><a href="http://facebook.github.io/react/" target="_blank"><img src="http://gilbarbara.github.io/logos/logos/react.svg" width="96"/></a></li>
						<li><a href="https://facebook.github.io/flux/" target="_blank"><img src="http://gilbarbara.github.io/logos/logos/flux.svg" width="96"/></a></li>
						<li><a href="http://gulpjs.com/" target="_blank"><img src="http://gilbarbara.github.io/logos/logos/gulp.svg" width="64"/></a></li>
						<li><a href="http://browserify.org/" target="_blank"><img src="http://gilbarbara.github.io/logos/logos/browserify-icon.svg" width="96"/></a></li>
						<li><a href="https://babeljs.io/" target="_blank"><img src="http://gilbarbara.github.io/logos/logos/babel.svg" width="96"/></a></li>
						<li><a href="http://mochajs.org/" target="_blank"><img src="http://gilbarbara.github.io/logos/logos/mocha.svg" width="64"/></a></li>
					</ul>
				</div>
			</footer>
		);
	}

});

module.exports = Footer;
