import keyMirror from 'fbjs/lib/keyMirror';

export const ActionTypes = keyMirror({
	FETCH_STORIES: undefined,
	FETCH_STORY: undefined,
	NAVIGATE: undefined,
	SHOW_ALERT: undefined
});

export const XHR = keyMirror({
	SUCCESS: undefined,
	FAIL: undefined
});

export default { ActionTypes, XHR };
