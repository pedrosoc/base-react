import React from 'react';
import ReactDOM from 'react-dom';
import Ap from './Ap';

it('renders without crashing', () => {
	const span = document.createElement('span');
	ReactDOM.render(<Ap />, span);
	ReactDOM.unmountComponentAtNode(span);
});
