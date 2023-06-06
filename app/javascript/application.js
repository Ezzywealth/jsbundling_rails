import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
	return (
		<>
			<HelloWorld />
		</>
	);
}

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
