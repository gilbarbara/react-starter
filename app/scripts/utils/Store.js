var Store = function () {};
var change = 'CHANGE';

Store.prototype.emitChange = function (action) {
	this.emit(change, action);
};

Store.prototype.addChangeListener = function (callback) {
	this.on(change, callback);
};

Store.prototype.removeChangeListener = function (callback) {
	this.removeListener(change, callback);
};

module.exports = Store;
