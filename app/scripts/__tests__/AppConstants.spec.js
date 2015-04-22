describe('Contants', function () {
	var AppConstants = require('../constants/AppConstants');
	var ActionTypes = AppConstants.ActionTypes;

	it('should have "FETCH_STORIES" attr', function () {
		ActionTypes.FETCH_STORIES.should.be.equal('FETCH_STORIES');
	});

	it('should have "FETCH_STORY" attr', function () {
		ActionTypes.FETCH_STORY.should.be.equal('FETCH_STORY');
	});

	it('should have "SHOW_ALERT" attr', function () {
		ActionTypes.SHOW_ALERT.should.be.equal('SHOW_ALERT');
	});

	it('should have "NAVIGATE" attr', function () {
		ActionTypes.NAVIGATE.should.be.equal('NAVIGATE');
	});

});
