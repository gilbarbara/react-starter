var assign         = require('react/lib/Object.assign'),
	EventEmitter  = require('events').EventEmitter,
	AppConstants   = require('../constants/AppConstants'),
	AppDispatcher = require('../dispatcher/AppDispatcher'),
	Store         = require('../utils/Store');

// Internal object
var HNData = {};

var HNStore = assign(new Store(), EventEmitter.prototype, {
	process: function (payload) {
		var action = payload.action;

		switch (action.type) {

			case AppConstants.ActionTypes.FETCH_STORIES:
			{
				this.handleFetchStories(action);
				this.emitChange(AppConstants.ActionTypes.FETCH_STORIES);
				break;
			}

			case AppConstants.ActionTypes.FETCH_STORY:
			{
				this.handleFetchStory(action);
				this.emitChange(AppConstants.ActionTypes.FETCH_STORY);
				break;
			}

			default:
			{
				break;
			}
		}

	},

	handleFetchStories: function (action) {
		HNData.storiesIds = action;
	},

	fetchStoriesResponse: function () {
		return HNData.storiesIds;
	},

	handleFetchStory: function (action) {
		HNData.story = action;
	},

	fetchStoryResponse: function () {
		return HNData.story;
	}

});

HNStore.dispatchToken = AppDispatcher.register(HNStore.process.bind(HNStore));
module.exports = HNStore;
