import {compose, createStore} from 'redux';
import * as json from './json/resume';

const jsonData = (state = json) => {
	return state;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = preloadedState => {
	return createStore(jsonData, preloadedState, composeEnhancers());
};

export default store;