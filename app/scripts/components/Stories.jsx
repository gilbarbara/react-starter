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
			start: undefined,
			max: 20,
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

	componentDidUpdate: function (prevProps, prevState) {
		if (prevState.start !== this.state.start) {
			this.loadStories();
		}
	},

	_handleHNChange: function (action) {
		var response,
			state = {
				stories: this.state.stories
			};

		if (action === ActionTypes.FETCH_STORIES) {
			response = HNStore.fetchStoriesResponse();
			if (response.status === XHR.SUCCESS) {
				window.storiesIds = response.data;
				state.storiesIds = response.data;
				state.start = 0;
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

	loadStories: function () {
		this.state.storiesIds.slice(this.state.start, (this.state.start + this.state.max)).forEach(function (d) {
			AppActions.fetchStory(d);
		})
	},

	_onClickLoadMore: function (e) {
		e.preventDefault();
		this.setState({
			start: this.state.start + this.state.max
		})
	},


	render: function () {
		var output  = {},
			stories = [];

		if (this.state.ready) {
			_.map(this.state.stories, function (d) {
				console.log(d);
				stories.push(<div key={d.id} className="stories__item">
					<div><a href={d.url} target="_blank">{d.title}</a></div>
					<span className="score">{d.score}</span>
				</div>);
			});
			output.html = { stories };
			output.actions = (
				<div className="app__actions">
					<a href="#" className="load-more btn btn-primary btn-lg" onClick={this._onClickLoadMore}> Load More</a>
				</div>
			);
		}
		else {
			output.html = <Loader/>;
		}

		return (
			<div key="Stories">
				<h2>Hacker News</h2>

				<div className="stories">{output.html}</div>
				{output.actions}
			</div>
		);
	}

});

module.exports = Stories;
