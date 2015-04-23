var chai            = require('chai'),
	sinon           = require('sinon'),
	sinonChai       = require('sinon-chai'),
	SandboxedModule = require('sandboxed-module'),
	expect          = chai.expect;

chai.should();
chai.use(sinonChai);

describe('HNStore', function () {

	describe('process', function () {
		var fakePayload;

		describe('Given a type "FETCH_STORIES" ', function () {
			var HNStore;

			before(function () {
				fakePayload = {
					action: {
						type: 'FETCH_STORIES',
						status: 'success'
					}
				};

				HNStore = SandboxedModule.require('../stores/HNStore', {
					requires: {
						'../utils/Store': function () {
							this.emitChange = function () {
							};
						},
						'../constants/AppConstants': require('../constants/AppConstants')
					}
				});

				sinon.stub(HNStore, 'emitChange');
			});

			after(function () {
				HNStore.emitChange.restore();
			});

			it('should create a fetchStories props with action data in state', function () {
				HNStore.process(fakePayload);
				expect(HNStore.fetchStoriesResponse()).to.be.deep.equal({
					type: 'FETCH_STORIES',
					status: 'success'
				});
				HNStore.emitChange.should.be.called;
			});

		});

		describe('Given a type "FETCH_STORY" ', function () {
			var HNStore;

			before(function () {
				fakePayload = {
					action: {
						type: 'FETCH_STORY',
						status: 'success'
					}
				};

				HNStore = SandboxedModule.require('../stores/HNStore', {
					requires: {
						'../utils/Store': function () {
							this.emitChange = function () {
							};
						},
						'../constants/AppConstants': require('../constants/AppConstants')
					}
				});

				sinon.stub(HNStore, 'emitChange');
			});

			after(function () {
				HNStore.emitChange.restore();
			});

			it('should create a fetchTransactions props with action data in state', function () {
				HNStore.process(fakePayload);
				expect(HNStore.fetchStoryResponse()).to.be.deep.equal({
					type: 'FETCH_STORY',
					status: 'success'
				});
				HNStore.emitChange.should.be.called;
			});

		});

	});
});
