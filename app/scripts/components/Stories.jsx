var React       = require('react'),
	Router      = require('react-router'),
	_           = require('lodash'),
	AppActions  = require('../actions/AppActions'),
	ActionTypes = require('../constants/AppConstants').ActionTypes,
	XHR         = require('../constants/AppConstants').XHR,
	HNStore     = require('../stores/HNStore.js'),
	Loader      = require('./elements/Loader');

var RouteHandler = Router.RouteHandler;

var Stories = React.createClass({

	getInitialState: function () {
		return {
			ready: false,
			error: undefined,
			storiesIds: [],
			stories: []
		};
	},

	componentDidMount: function () {
		HNStore.addChangeListener(this._handleHNChange);
		AppActions.fetchStories();
	},

	componentWillUnmount: function () {
		HNStore.removeChangeListener(this._handleHNChange);
	},

	_handleHNChange: function (action) {
		var response,
			state = {
				stories: this.state.stories
			};

		if (action === ActionTypes.FETCH_STORIES) {
			response = HNStore.fetchStoriesResponse();
			if (response.status === XHR.SUCCESS) {
				state.storiesIds = response.data;

				// moveto a function
				state.storiesIds.slice(0, 20).forEach(function (d) {
					AppActions.fetchStory(d);
				})
			}
			else {
				state.error = response.data.message;
			}
		}
		else if (action === ActionTypes.FETCH_STORY) {
			response = HNStore.fetchStoryResponse();

			if (response.status === XHR.SUCCESS) {
				state.ready = true;
				state.stories.push(response.data);
			}
			else {
				state.error = response.data.message;
			}
		}

		this.setState(state);
	},

	render: function () {
		var html,
			stories = [];

		if (this.state.ready) {
			_.map(this.state.stories, function (d) {
				stories.push(<div key={d.id} className="stories__item">
					<a href={d.url} target="_blank">{d.title}</a>
				</div>);
			});
			html = { stories };

		}
		else {
			html = <Loader/>;
		}

		return (
			<div key="Stories">
				<h1>Hacker News</h1>

				<div className="stories">{html}</div>
			</div>
		);
	}

});

module.exports = Stories;
