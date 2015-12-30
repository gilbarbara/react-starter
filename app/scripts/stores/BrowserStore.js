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

class BrowserStore extends Store {
	constructor () {
		super();

		this.dispatchToken = Dispatcher.register(this.process.bind(this));

		State.clear();
	}

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

	setAlertMessage (status, message, withTimeout = true) {
		let state = State.get();
		state.alert = {
			status,
			message,
			withTimeout
		};
		State.set(state);
	}

	getAlertMessage () {
		return State.get().alert;
	}

	getCurrentPath () {
		return State.get().currentPath;
	}

	setCurrentPath (path) {
		let state = State.get();
		state.currentPath = path;
		State.set(state);
	}

	navigateTo (destination, params, query) {
		let state = State.get();
		state.currentPath = destination;
		state.params = params;

		history.pushState(null, destination + (params ? '/' + params : ''), query);
	}
}

export default new BrowserStore();
