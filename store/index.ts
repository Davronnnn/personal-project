import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth-slice';

const store = configureStore({
	reducer: { room: authSlice.reducer },
});

export default store;
