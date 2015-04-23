var React      = require('react/addons'),
	Bootstrap  = require('react-bootstrap'),
	NPMPackage = require('../../../../package.json');

var { Nav, NavItem, Glyphicon } = Bootstrap;

var Header = React.createClass({

	render: function () {
		return (
			<header className="app__header">
				<div className="app__container">
					<h3>{NPMPackage.title}</h3>
					<div className="menu clearfix">
						<Nav navbar>
							<NavItem eventKey={1} href="#"><Glyphicon glyph="dashboard"/>Home</NavItem>
							<NavItem active eventKey={2} href="#"><Glyphicon glyph="fire"/>Hacker News</NavItem>
						</Nav>
					</div>
				</div>
			</header>
		);
	}

});

module.exports = Header;
