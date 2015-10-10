var React           = require('react'),
	PureRenderMixin = require('react-addons-pure-render-mixin'),
	config          = require('../config'),
	Loader          = require('./elements/Loader');

var Home = React.createClass({
	mixins: [PureRenderMixin],

	getInitialState () {
		return {
			ready: false,
			items: []
		};
	},

	componentDidMount () {
		setTimeout(function () {
			this.setState({
				ready: true,
				items: config.items
			});
		}.bind(this), 1000);
	},

	render () {
		var html;

		if (this.state.ready) {
			html = (
				<div className="row">
					{
						this.state.items.map((item, i) => {
							var key = Object.keys(item);
							return (
							<div key={i} className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
								<div className="item">
									<h3>{key}</h3>
									{item[key]}
								</div>
							</div>
								);
							})
						}
				</div>
			);
		}
		else {
			html = (<Loader />);
		}
		return (
			<div key="Home" className="home">{html}</div>
		);
	}

});

module.exports = Home;
