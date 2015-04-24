var assign        = require('react/lib/Object.assign'),
	EventEmitter  = require('events').EventEmitter,
	AppConstants  = require('../constants/AppConstants'),
	AppDispatcher = require('../dispatcher/AppDispatcher'),
	Store         = require('../utils/Store'),
	AppRouter     = require('../utils/Router');

// Internal object
var BSData = {
	alert: null
};

var BrowserStore = assign(new Store(), EventEmitter.prototype, {
	process: function (payload) {
		var action = payload.action;

		switch (action.type) {

			case AppConstants.ActionTypes.SHOW_ALERT:
			{
				this.setAlertMessage(action.status, action.message, action.withTimeout);
				this.emitChange(AppConstants.ActionTypes.SHOW_ALERT);
				break;
			}

			case AppConstants.ActionTypes.NAVIGATE:
			{
				this.navigateTo(action.destination, action.params, action.query);
				this.emitChange(AppConstants.ActionTypes.NAVIGATE);
				break;
			}

			default:
			{
				break;
			}
		}
	},

	setAlertMessage: function (status, message, withTimeout) {
		BSData.alert = {
			status: status,
			message: message,
			withTimeout: withTimeout
		};
	},

	getAlertMessage: function () {
		return BSData.alert;
	},

	getCurrentPath: function () {
		return BSData.currentPath;
	},

	setCurrentPath: function (path) {
		BSData.currentPath = path;
	},

	getParams: function () {
		return BSData.params;
	},

	navigateTo: function (destination, params, query) {
		BSData.currentPath = destination;
		BSData.params = params;

		var router = AppRouter.getRouter();
		router.transitionTo(destination, params, query);
	}

});

BrowserStore.dispatchToken = AppDispatcher.register(BrowserStore.process.bind(BrowserStore));

module.exports = BrowserStore;
