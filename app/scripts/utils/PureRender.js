import shallowEqual from 'fbjs/lib/shallowEqual';

export default (instance, nextProps, nextState, nextContext) => {
	return !shallowEqual(instance.props, nextProps)
		|| !shallowEqual(instance.state, nextState)
		|| !shallowEqual(instance.context, nextContext);
};
