import { ActionTypes } from '../constants/AppConstants';
import Dispatcher from '../utils/Dispatcher';
import Store from '../utils/Store';
import StateHelper from '../utils/State';
import history from '../utils/History';

const State = StateHelper.init({
	name: 'BrowserState',
	state: {
		alert: undefined,
		currentPath: undefined
	}
});

/**
 * @class
 * @desc Handle browser changes
 *
 * @extends Store
 * @requires Dispatcher
 * @requires State
 * @requires Constants
 * @requires History
*/
class BrowserStore extends Store {
	constructor () {
		super();

		this.dispatchToken = Dispatcher.register(this.process.bind(this));

		State.clear();
	}

	/**
	 * Process the dispatched actions
	 * @method
	 * @param {Object} payload
     */
	process (payload) {
		let action = payload.action;

		switch (action.type) {

			case ActionTypes.SHOW_ALERT:
			{
				this.setAlertMessage(action.status, action.message, action.withTimeout);
				this.emitChange(ActionTypes.SHOW_ALERT);
				break;
			}

			case ActionTypes.NAVIGATE:
			{
				this.navigateTo(action.destination, action.params, action.query);
				this.emitChange(ActionTypes.NAVIGATE);
				break;
			}

			default:
			{
				break;
			}
		}
	}

	/**
	 * @method
	 * @param {String} status
	 * @param {String} message
	 * @param {Boolean} withTimeout
     */
	setAlertMessage (status, message, withTimeout = true) {
		let state = State.get();
		state.alert = {
			status,
			message,
			withTimeout
		};
		State.set(state);
	}

	/**
	 * @returns {Object}
     */
	getAlertMessage () {
		return State.get().alert;
	}

	/**
	 * Get the pathname
	 * @returns {String}
     */
	getCurrentPath () {
		return State.get().currentPath;
	}

	/**
	 * Seve the pathname
	 * @param {String} path
     */
	setCurrentPath (path) {
		let state = State.get();
		state.currentPath = path;
		State.set(state);
	}

	/**
	 * Navigate between routes
	 * @param {String} destination
	 * @param {String} params
	 * @param {String} query
     */
	navigateTo (destination, params, query) {
		let state = State.get();
		state.currentPath = destination;
		state.params = params;

		history.pushState(null, destination + (params ? '/' + params : ''), query);
	}
}

export default new BrowserStore();
