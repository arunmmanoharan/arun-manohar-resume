import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import {Route, HashRouter, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import './scss/default.scss';
import './scss/layout.scss';
import './scss/media-queries.scss';
import './index.scss';
import createStore from './store';

import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';

const store = createStore();

const Routes = (
	<HashRouter>
		<Switch>
			<Route exact path="/" component={Home}/>
			<Route path='/error' component={NotFound}/>
		</Switch>
	</HashRouter>);

ReactDOM.render(<Provider store={store}>{Routes}</Provider>, document.getElementById('root'));
