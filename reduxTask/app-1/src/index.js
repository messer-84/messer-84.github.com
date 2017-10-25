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


//
// const addTrackBtn = document.querySelectorAll('.addTrack')[0];
// const trackInput = document.querySelectorAll('.trackInput')[0];
// const list = document.querySelectorAll('.list')[0];
//
//
// store.subscribe(() => {
// 	list.innerHTML = '';
// 	trackInput.value = '';
// 	store.getState().forEach(track => {
// 		const li = document.createElement('li');
// 		li.textContent = track;
// 		list.appendChild(li);
// 	});
// });
//
//
//
// addTrackBtn.addEventListener('click', () => {
// 	const trackName = trackInput.value;
// 	store.dispatch({
// 		type: 'ADD_TRACK',
// 		payload: trackName
// 	});
//
// });

