import { Dispatcher } from 'flux';

/**
 * @class
 * @desc Create a custom flux dispatcher
 * @exports Dispatcher
 *
 * @requires flux
 */
class FluxDispatcher extends Dispatcher {
	constructor () {
		super();
	}

	/**
	 * @method
	 * @param {String} action
	 */
	handleViewAction (action) {
		let payload = {
			source: 'VIEW_ACTION',
			action
		};

		this.dispatch(payload);
	}
}

export default new FluxDispatcher();
