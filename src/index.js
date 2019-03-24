import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import './scss/default.scss';
import './scss/layout.scss';
import './scss/media-queries.scss';
import './index.scss';
import createStore from './store';
import history from './history';

import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';

const store = createStore();

const Routes = (
	<Router history={history}>
		<Switch>
			<Route exact path="/" component={Home}/>
			<Route path='*' component={NotFound}/>
		</Switch>
	</Router>);

ReactDOM.render(<Provider store={store}>{Routes}</Provider>, document.getElementById('root'));
