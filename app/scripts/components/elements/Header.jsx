var React           = require('react'),
	PureRenderMixin = require('react-addons-pure-render-mixin'),
	AppActions      = require('../../actions/AppActions'),
	BrowserStore    = require('../../stores/BrowserStore'),
	NPMPackage      = require('../../../../package.json');


var Header = React.createClass({
	mixins: [PureRenderMixin],

	contextTypes: {
		location: React.PropTypes.object
	},

	getInitialState () {
		return {
			currentPath: null
		};
	},

	componentWillMount () {
		BrowserStore.setCurrentPath(this.context.location.path_name);
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

						<ul className="nav navbar-nav">
							<li className={BrowserStore.getCurrentPath() === '/home' ? 'active' : ''}
								onClick={this._onClickLink} data-destination="/home">
								<a href="#"><span
									className="fa fa-home" />Home
								</a>
							</li>
							<li className={['/', '/stories'].indexOf(BrowserStore.getCurrentPath()) > -1 ? 'active' : ''}
								href="#" onClick={this._onClickLink} data-destination="/stories">
								<a href="#">
									<span
										className="fa fa-fire" />Hacker News</a>
							</li>
						</ul>
					</div>
				</div>
			</header>
		);
	}

});

module.exports = Header;
