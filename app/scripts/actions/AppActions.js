var AppDispatcher = require('../dispatcher/AppDispatcher'),
	HNApi         = require('../api/HNApi'),
	ActionTypes   = require('../constants/AppConstants').ActionTypes;

module.exports = {
	/**
	 * Fetch Stories' IDs
	 * @constructor
	 */
	fetchStories: function () {
		HNApi.fetchAll();
	},

	/**
	 * Server response for a stories request
	 * @constructor
	 * @param {String} status - Request Status ( success, fail )
	 * @param {Object} data - xhr
	 */
	storiesLoaded: function (status, data) {
		AppDispatcher.handleViewAction({
			type: ActionTypes.FETCH_STORIES,
			status: status,
			data: data
		});
	},

	/**
	 * Fetch Story
	 * @constructor
	 */
	fetchStory: function (id) {
		HNApi.fetchOne(id);
	},

	/**
	 * Server response for a story request
	 * @constructor
	 * @param {String} status - Request Status ( success, fail )
	 * @param {Object} data - xhr
	 */
	storyLoaded: function (status, data) {
		AppDispatcher.handleViewAction({
			type: ActionTypes.FETCH_STORY,
			status: status,
			data: data
		});
	}
};
