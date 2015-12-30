import React from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

class NotFound extends React.Component {
	constructor (props) {
		super(props);
	}

	shouldComponentUpdate = shouldPureComponentUpdate;

	render () {
		return (
			<div key="404" className="not-found">
				<h1>404</h1>
			</div>
		);
	}
}

export default NotFound;
