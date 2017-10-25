import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import './index.css';
import reducer from './reducers';


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));


render(
		<Provider store={store}>
			<App />
		</Provider>
		, document.getElementById('root'));
