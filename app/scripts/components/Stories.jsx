var React       = require('react/addons'),
	_           = require('lodash'),
	AppActions  = require('../actions/AppActions'),
	ActionTypes = require('../constants/AppConstants').ActionTypes,
	XHR         = require('../constants/AppConstants').XHR,
	HNStore     = require('../stores/HNStore.js'),
	Loader      = require('./elements/Loader');

var StoriesApp = React.createClass({
	mixins: [React.addons.PureRenderMixin],

	getInitialState () {
		return {
			ready: false,
			error: undefined,
			start: undefined,
			max: 20,
			storiesIds: [],
			stories: []
		};
	},

	componentDidMount () {
		HNStore.addChangeListener(this._handleHNChange);
		AppActions.fetchStories();
	},

	componentWillUnmount () {
		HNStore.removeChangeListener(this._handleHNChange);
	},

	componentDidUpdate (prevProps, prevState) {
		if (prevState.start !== this.state.start) {
			this.loadStories();
		}
	},

	_handleHNChange (action) {
		var response,
			state = {};

		if (action === ActionTypes.FETCH_STORIES) {
			response = HNStore.fetchStoriesResponse();
			if (response.status === XHR.SUCCESS) {
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
				state = React.addons.update(this.state, {
						stories: { $push: [response.data] }
					}
				);
			}
			else {
				state.error = response.data.message;
			}
		}

		this.setState(state, () => {
			if (!this.state.ready && this.state.stories.length === (this.state.start + this.state.max)) {
				this.setState({
					ready: true
				});
			}
		});
	},

	loadStories () {
		this.state.storiesIds.slice(this.state.start, (this.state.start + this.state.max)).forEach((d) => {
			AppActions.fetchStory(d);
		});
	},

	_onClickLoadMore (e) {
		e.preventDefault();
		this.setState({
			start: this.state.start + this.state.max
		});
	},

	render () {
		var output = {};

		if (this.state.ready) {
			output.html = this.state.stories.map((d) => {
				return (
					<div key={d.id} className="stories__item">
						<a href={d.url} target="_blank">{d.title}</a>
						<span className="score">{d.score}</span>
					</div>
				);
			});

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
			<div key="Stories" className="stories-app">
				<h1>Hacker News</h1>

				<div className="stories">{output.html}</div>
				{output.actions}
			</div>
		);
	}

});

module.exports = StoriesApp;
