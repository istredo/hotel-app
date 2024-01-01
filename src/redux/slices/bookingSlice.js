//pop-up бронирования номера

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	open: false,
}

export const bookingSlice = createSlice({
	name: 'booking',
	initialState,
	reducers: {
		bookingOpen: (state) => {
			state.open = true
		},
		bookingClose: (state) => {
			state.open = false
		},
		bookingToggle: (state) => {
			state.open = !state.open
		},
	},
})


export const { bookingOpen, bookingClose, bookingToggle } = bookingSlice.actions

export default bookingSlice.reducer


// import { useSelector, useDispatch } from 'react-redux'
// import {  bookingOpen, bookingClose, bookingToggle} from '../redux/slices/bookingSlice'

// const booking = useSelector((state) => state.booking.open)
// const dispatch = useDispatch()