import React from 'react';
import { render } from 'react-dom';

function HelloWorld() {
	return <h1>Hello World</h1>;

}

messer$ npm i -D babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-react-hmre babel-preset-stage-0 webpack-dev-server webpack


render(<HelloWorld/>, document.getElementById('container'));