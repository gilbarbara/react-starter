import { EventEmitter } from 'events';

const change = 'CHANGE';

class Store extends EventEmitter {
	constructor (props) {
		super(props);
	}

	emitChange (action) {
		super.emit(change, action);
	}

	addChangeListener (callback) {
		super.on(change, callback);
	}

	removeChangeListener (callback) {
		super.removeListener(change, callback);
	}
}

export default Store;
