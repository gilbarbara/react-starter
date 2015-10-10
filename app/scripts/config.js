var NPMPackage = require('../../package.json');
module.exports = {
	items: [
		{ react: NPMPackage.dependencies.react.replace(/~|\^/, '') },
		{ 'react-router': NPMPackage.dependencies['react-router'].replace(/~|\^/, '') }
	]
};
