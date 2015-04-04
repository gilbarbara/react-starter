var React    = require('react/addons'),
	Router   = require('react-router'),
	App      = require('./components/App'),
	Home     = require('./components/Home'),
	Info     = require('./components/Info'),
	NotFound = require('./components/NotFound');

var { Route, DefaultRoute, NotFoundRoute } = Router;

module.exports = (
	<Route handler={App}>
		<Route name="home" handler={Home}/>
		<Route name="info" handler={Info}/>
		<DefaultRoute handler={Home}/>
		<NotFoundRoute handler={NotFound}/>
	</Route>
);
