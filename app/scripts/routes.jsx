var React    = require('react'),
	Router   = require('react-router'),
	App      = require('./components/App'),
	Home     = require('./components/Home'),
	Stories  = require('./components/Stories'),
	Info     = require('./components/Info'),
	NotFound = require('./components/NotFound');

var { Route, IndexRoute } = Router;

module.exports = (
	<Route path="/" component={App}>
		<IndexRoute component={Stories} />
		<Route name="home" component={Home} />
		<Route name="info" component={Info} />
		<Route name="stories" component={Stories} />
		<Route path="*" component={NotFound} />
	</Route>
);
