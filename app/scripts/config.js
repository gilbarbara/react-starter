var NPMPackage = require('../../package.json');
module.exports = {
	items: [
		{ react: NPMPackage.dependencies.react.replace(/~|\^/, '') },
		{ 'react-router': NPMPackage.dependencies['react-router'].replace(/~|\^/, '') },
		{ 'react-bootstrap': NPMPackage.dependencies['react-bootstrap'].replace(/~|\^/, '') }
	]

/*	items: [
		'Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former.',
		'Everything is theoretically impossible, until it is done.',
		'If the facts don\'t fit the theory, change the facts.',
		'The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.'
	]*/
};
