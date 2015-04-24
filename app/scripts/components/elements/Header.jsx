var React        = require('react/addons'),
	Bootstrap    = require('react-bootstrap'),
	AppActions   = require('../../actions/AppActions'),
	BrowserStore = require('../../stores/BrowserStore'),
	NPMPackage   = require('../../../../package.json');

var { Nav, NavItem, Glyphicon } = Bootstrap;

var Header = React.createClass({
	mixins: [React.addons.PureRenderMixin],

	contextTypes: {
		router: React.PropTypes.func
	},

	getInitialState: function () {
		return {
			currentPath: null
		};
	},

	componentWillMount: function () {
		BrowserStore.setCurrentPath(this.context.router.getCurrentPath());
	},

	_onClickLink: function (e) {
		e.preventDefault();
		AppActions.goTo(e.currentTarget.dataset.destination);

		this.setState({
			currentPath: e.currentTarget.dataset.destination
		});
	},

	render: function () {
		return (
			<header className="app__header">
				<div className="app__container">
					<h3>{NPMPackage.title}</h3>

					<div className="menu clearfix">
						<Nav navbar>
							<NavItem active={BrowserStore.getCurrentPath() === '/home'} eventKey={1} href="#" onClick={this._onClickLink} data-destination="/home"><Glyphicon
								glyph="dashboard"/>Home</NavItem>
							<NavItem active={['/', '/stories'].indexOf(BrowserStore.getCurrentPath()) > -1 } eventKey={2} href="#" onClick={this._onClickLink}
									 data-destination="/stories"><Glyphicon glyph="fire"/>Hacker News</NavItem>
						</Nav>
					</div>
				</div>
			</header>
		);
	}

});

module.exports = Header;
