import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld';
import { Provider } from 'react-redux';
import store from './redux/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HelloWorld />,
	},
]);

ReactDOM.render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>,
	document.getElementById('root')
);
