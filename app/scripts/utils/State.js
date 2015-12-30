import Storage from './Storage';

class State {
	constructor (opt) {
		if (!opt || !opt.name || !opt.state) {
			throw new Error('name and state argument is required');
		}

		let name  = opt.name,
			state = opt.state,
			tmp   = Storage.getItem(name);

		if (tmp && opt.skipStorageData) {
			return;
		}

		if (!tmp || opt.forceUpdate) {
			tmp = state;
			Storage.setItem(name, tmp);
		}

		this.orig = state;
		this.name = name;
	}

	get () {
		return Storage.getItem(this.name);
	}

	set (state) {
		Storage.setItem(this.name, state);
	}

	clear () {
		Storage.setItem(this.name, this.orig);
	}
}

export default {
	init (opt) {
		return new State(opt);
	}
};
