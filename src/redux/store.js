import { configureStore } from '@reduxjs/toolkit';
import oneClickReducer from './slices/oneClickSlice'
import roomsReducer from './slices/roomsSlice'
import bookingReducer from './slices/bookingSlice'

export const store = configureStore({
	reducer: {
		oneClick: oneClickReducer,
		rooms: roomsReducer,
		booking: bookingReducer,
		// theme: themeReducer,
	},
})