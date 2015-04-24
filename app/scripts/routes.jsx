var React    = require('react/addons'),
	Router   = require('react-router'),
	App      = require('./components/App'),
	Home     = require('./components/Home'),
	Stories  = require('./components/Stories'),
	Info     = require('./components/Info'),
	NotFound = require('./components/NotFound');

var { Route, DefaultRoute, NotFoundRoute } = Router;

module.exports = (
	<Route handler={App}>
		<Route name="home" handler={Home}/>
		<Route name="info" handler={Info}/>
		<Route name="stories" handler={Stories}/>
		<DefaultRoute handler={Stories}/>
		<NotFoundRoute handler={NotFound}/>
	</Route>
);
