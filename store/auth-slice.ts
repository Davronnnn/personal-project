import { createSlice } from '@reduxjs/toolkit';

const DUMMY_ROOMS = [
	{
		roomNumber: '1',
	},
	{
		roomNumber: '2',
	},
	{
		roomNumber: '3',
	},
];

const roomSlice = createSlice({
	name: 'rooms',
	initialState: {
		rooms: DUMMY_ROOMS,
		loading: false,
		error: null,
		orderedRooms: [],
		todayEmptyRooms: DUMMY_ROOMS.length,
		notification: null,
	},
	reducers: {
		showNotification(state, action) {
			// state.notification = {
			// 	status: action.payload.status,
			// 	title: action.payload.title,
			// 	message: action.payload.message,
			// };
		},
		getOrderedRooms: (state, action) => {
			state.orderedRooms = action.payload;
		},

		orderRoom: (state, action) => {
			const newRoom = action.payload;

			// state.orderedRooms.push(newRoom);

			if (
				action.payload.bookingDate ===
				new Date().toISOString().slice(0, 10)
			) {
				state.todayEmptyRooms--;
			}
		},
	},
});

export const roomActions = roomSlice.actions;

export default roomSlice;
