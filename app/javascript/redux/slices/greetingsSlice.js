import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
	greeting: '',
	loading: false,
	error: '',
};

export const fetchGreeting = createAsyncThunk('fetchGreeting', async () => {
	const response = await axios.get('http://localhost:5000/api/v1/greetings');
	const { data } = response;
	return data;
});

const greetingsSlice = createSlice({
	name: 'greetings',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchGreeting.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(fetchGreeting.fulfilled, (state, action) => {
			state.greeting = action.payload.data;
			state.loading = false;
		});
		builder.addCase(fetchGreeting.rejected, (state, action) => {
			state.error = 'Error fetching greeting';
			state.loading = false;
		});
	},
});

export default greetingsSlice.reducer;
