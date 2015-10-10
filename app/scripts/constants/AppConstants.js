var keyMirror = require('../utils/keyMirror');

var AppConstants = {
	ActionTypes: keyMirror({
		FETCH_STORIES: undefined,
		FETCH_STORY: undefined,
		NAVIGATE: undefined,
		SHOW_ALERT: undefined
	}),
	XHR: keyMirror({
		SUCCESS: undefined,
		FAIL: undefined
	})
};

module.exports = AppConstants;
