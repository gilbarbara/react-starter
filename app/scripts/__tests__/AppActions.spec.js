var chai            = require('chai'),
	sinon           = require('sinon'),
	sinonChai       = require('sinon-chai'),
	SandboxedModule = require('sandboxed-module'),
	expect          = chai.expect,
	_               = require('lodash');

chai.should();
chai.use(sinonChai);

function createFakeAppActionsRequires (options) {
	var defaultRequires = {
		'../api/HNApi': sinon.spy(),
		'../dispatcher/AppDispatcher': {
			handleViewAction: sinon.spy()
		},
		'../constants/AppConstants': require('../constants/AppConstants'),
		lodash: require('lodash')
	};

	return _.merge(defaultRequires, options);
}

describe('AppActions', function () {

	describe('fetchStories', function () {
		var AppActions, fakeDispatcher, expected, HNApi;

		beforeEach(function () {

			fakeDispatcher = {
				handleViewAction: sinon.spy()
			};

			HNApi = {
				fetchAll: sinon.spy()
			};

			AppActions = SandboxedModule.require('../actions/AppActions', {
				requires: createFakeAppActionsRequires({
					'../api/HNApi': HNApi,
					'../dispatcher/AppDispatcher': fakeDispatcher
				})
			});

		});

		it('should call HNApi.fetchAll', function () {
			AppActions.fetchStories();
			HNApi.fetchAll.should.be.called;
		});
	});

	describe('storiesLoaded', function () {
		var AppActions, fakeDispatcher, expected;

		beforeEach(function () {
			expected = {
				type: 'FETCH_STORIES',
				status: 'status',
				data: 'data'
			};

			fakeDispatcher = {
				handleViewAction: sinon.spy()
			};

			AppActions = SandboxedModule.require('../actions/AppActions', {
				requires: createFakeAppActionsRequires({
					'../dispatcher/AppDispatcher': fakeDispatcher
				})
			});

		});

		it('should call AppDispatcher.handleViewAction with FETCH_STORIES action', function () {
			AppActions.storiesLoaded('status', 'data');
			fakeDispatcher.handleViewAction.should.be.calledWith(expected);
		});

	});

	describe('fetchStory', function () {
		var AppActions, fakeDispatcher, expected, HNApi;

		beforeEach(function () {

			fakeDispatcher = {
				handleViewAction: sinon.spy()
			};

			HNApi = {
				fetchOne: sinon.spy()
			};

			AppActions = SandboxedModule.require('../actions/AppActions', {
				requires: createFakeAppActionsRequires({
					'../api/HNApi': HNApi,
					'../dispatcher/AppDispatcher': fakeDispatcher
				})
			});

		});

		it('should call HNApi.fetchOne', function () {
			AppActions.fetchStory();
			HNApi.fetchOne.should.be.called;
		});
	});

	describe('storyLoaded', function () {
		var AppActions, fakeDispatcher, expected;

		beforeEach(function () {
			expected = {
				type: 'FETCH_STORY',
				status: 'status',
				data: 'data'
			};

			fakeDispatcher = {
				handleViewAction: sinon.spy()
			};

			AppActions = SandboxedModule.require('../actions/AppActions', {
				requires: createFakeAppActionsRequires({
					'../dispatcher/AppDispatcher': fakeDispatcher
				})
			});

		});

		it('should call AppDispatcher.handleViewAction with FETCH_STORY action', function () {
			AppActions.storyLoaded('status', 'data');
			fakeDispatcher.handleViewAction.should.be.calledWith(expected);
		});

	});
});
