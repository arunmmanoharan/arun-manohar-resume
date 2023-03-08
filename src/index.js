import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import { createRoot } from 'react-dom/client';
import {Route, HashRouter, Routes} from 'react-router-dom';
import {Provider} from 'react-redux';
import './scss/default.scss';
import './scss/layout.scss';
import './scss/media-queries.scss';
import './index.scss';
import createStore from './store';

import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';

const store = createStore();

const RoutesComponent = (
	<HashRouter>
		<Routes>
			<Route path="/" element={<Home />}/>
			<Route path='/error' element={<NotFound />}/>
		</Routes>
	</HashRouter>);

let container = null;

document.addEventListener('DOMContentLoaded', () => {
	if (!container) {
		container = document.getElementById('root');
		const root = createRoot(container);
		root.render(<Provider store={store}>{RoutesComponent}</Provider>);
	}
});
