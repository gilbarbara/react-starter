var React     = require('react/addons'),
	Bootstrap = require('react-bootstrap'),
	config    = require('../config'),
	Loader    = require('./elements/Loader');

var Home = React.createClass({
	mixins: [React.addons.PureRenderMixin],

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
				<Bootstrap.Row>
					{
						this.state.items.map((item, i) => {
							var key = Object.keys(item);
							return (
								<Bootstrap.Col key={i} xs={12} sm={6} md={4} lg={3}>
									<div className="item">
										<h3>{key}</h3>
										{item[key]}
									</div>
								</Bootstrap.Col>
							);
						})
					}
				</Bootstrap.Row>
			);
		}
		else {
			html = (<Loader/>);
		}
		return (
			<div key="Home" className="home">{html}</div>
		);
	}

});

module.exports = Home;
