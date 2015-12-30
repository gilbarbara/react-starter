import { createHashHistory } from 'history';

/**
 * @module History
 * @desc Creates a HashHistory
 *
 * @requires history
 */
export default createHashHistory({
	queryKey: false
});
