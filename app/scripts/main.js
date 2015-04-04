var React  = require('react'),
	Router = require('react-router'),
	routes = require('./routes');

document.addEventListener('DOMContentLoaded', function () {
	Router.run(routes, Router.HistoryLocation, function (Handler) {
		React.render(<Handler/>, document.getElementById('react'));
	});
});
