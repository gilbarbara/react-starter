import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import history from './utils/History';

import routes from './routes';

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(<Router history={history} routes={routes} />, document.getElementById('react'));
});
