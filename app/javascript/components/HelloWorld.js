import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from '../redux/slices/greetingsSlice';

const HelloWorld = () => {
	const dispatch = useDispatch();
	const greeting = useSelector((state) => state.greeting);
	const loading = useSelector((state) => state.loading);
	const error = useSelector((state) => state.error);
	console.log(greeting);

	useEffect(() => {
		dispatch(fetchGreeting());
	}, []);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>{error}</div>;

	return <div>{greeting.greeting}</div>;
};

export default HelloWorld;
