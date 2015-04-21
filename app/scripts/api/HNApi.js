var $   = require('jquery'),
	XHR = require('../constants/AppConstants').XHR;

var HNApi = {
	url: 'https://hacker-news.firebaseio.com/v0',

	fetchAll: function () {
		var AppActions = require('../actions/AppActions');

		$.ajax({
			url: this.url + '/topstories.json?print=pretty',
			method: 'GET',
			dataType: 'json',
			complete: function (xhr) {
				if (xhr.status === 0) {
					AppActions.storiesLoaded(XHR.FAIL, {
						error: 'server error - status 0'
					});
				}
				else if (xhr.status < 299) {
					AppActions.storiesLoaded(XHR.SUCCESS, xhr.responseJSON);
				}
				else {
					AppActions.storiesLoaded(XHR.FAIL, xhr.responseJSON);
				}
			}
		});
	},

	fetchOne: function (id) {
		var AppActions = require('../actions/AppActions');

		$.ajax({
			url: this.url + '/item/' + id + '.json?print=pretty',
			method: 'GET',
			dataType: 'json',
			complete: function (xhr) {
				if (xhr.status === 0) {
					AppActions.storyLoaded(XHR.FAIL, {
						error: 'server error - status 0'
					});
				}
				else if (xhr.status < 299) {
					AppActions.storyLoaded(XHR.SUCCESS, xhr.responseJSON);
				}
				else {
					AppActions.storyLoaded(XHR.FAIL, xhr.responseJSON);
				}
			}
		});
	}
};

module.exports = HNApi;
