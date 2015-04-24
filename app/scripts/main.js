var React     = require('react'),
	AppRouter = require('./utils/Router'),
	routes    = require('./routes');

AppRouter.create(routes);
var route = AppRouter.getRouter();

document.addEventListener('DOMContentLoaded', function () {
	route.run(function (Handler) {
		React.render(<Handler/>, document.getElementById('react'));
	});
});
