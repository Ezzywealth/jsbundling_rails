import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld';

function App() {
	return (
		<>
			<HelloWorld />
		</>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));
