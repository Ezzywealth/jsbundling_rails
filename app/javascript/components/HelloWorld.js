import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HelloWorld = () => {
	const [greetings, setGreetings] = useState([]);
	const fetchData = async () => {
		const response = await axios.get('http://localhost:5000/api/v1/greetings');
		const { data } = response;
		setGreetings(() => data.data);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return <div>{greetings.greeting}</div>;
};

export default HelloWorld;
