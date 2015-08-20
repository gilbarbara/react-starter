var React        = require('react/addons'),
	Bootstrap    = require('react-bootstrap'),
	AppActions   = require('../../actions/AppActions'),
	BrowserStore = require('../../stores/BrowserStore'),
	NPMPackage   = require('../../../../package.json');

var { Nav, NavItem } = Bootstrap;

var Header = React.createClass({
	mixins: [React.addons.PureRenderMixin],

	contextTypes: {
		router: React.PropTypes.func
	},

	getInitialState () {
		return {
			currentPath: null
		};
	},

	componentWillMount () {
		BrowserStore.setCurrentPath(this.context.router.getCurrentPath());
	},

	_onClickLink (e) {
		e.preventDefault();
		AppActions.goTo(e.currentTarget.dataset.destination);

		this.setState({
			currentPath: e.currentTarget.dataset.destination
		});
	},

	render () {
		return (
			<header className="app__header">
				<div className="app__container">
					<h1>{NPMPackage.title}</h1>

					<div className="menu clearfix">
						<Nav navbar>
							<NavItem active={BrowserStore.getCurrentPath() === '/home'} eventKey={1} href="#" onClick={this._onClickLink} data-destination="/home"><span className="fa fa-home"/>Home</NavItem>
							<NavItem active={['/', '/stories'].indexOf(BrowserStore.getCurrentPath()) > -1 } eventKey={2} href="#" onClick={this._onClickLink}
									 data-destination="/stories"><span className="fa fa-fire"/>Hacker News</NavItem>
						</Nav>
					</div>
				</div>
			</header>
		);
	}

});

module.exports = Header;
