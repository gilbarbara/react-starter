var React    = require('react'),
	ReactDOM = require('react-dom'),
	Router   = require('react-router').Router,
	routes   = require('./routes');

document.addEventListener('DOMContentLoaded', function () {
	ReactDOM.render(<Router>{routes}</Router>, document.getElementById('react'));
});
