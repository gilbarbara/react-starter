import { Dispatcher } from 'flux';

class AppDispatcher extends Dispatcher {
	constructor () {
		super();
	}

	handleViewAction (action) {
		let payload = {
			source: 'VIEW_ACTION',
			action
		};

		this.dispatch(payload);
	}
}

export default new AppDispatcher();
