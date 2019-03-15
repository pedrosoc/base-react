import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
	const span = document.createElement('span');
	ReactDOM.render(<App />, span);
	ReactDOM.unmountComponentAtNode(span);
});
