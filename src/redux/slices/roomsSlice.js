//pop-up выбора номера

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	open: false,
	roomId: 0,
}

export const roomsSlice = createSlice({
	name: 'rooms',
	initialState,
	reducers: {
		modalOpen: (state) => {
			state.open = true
		},
		modalClose: (state) => {
			state.open = false
		},
		modalToggle: (state) => {
			state.open = !state.open
		},
		changeId: (state, actions) => {
			state.roomId = actions.payload
		}
	},
})


export const { modalOpen, modalClose, modalToggle, changeId } = roomsSlice.actions

export default roomsSlice.reducer


// import { useSelector, useDispatch } from 'react-redux'
// import { modalOpen, modalClose, modalToggle } from '../redux/slices/roomsSlice'

// const roomdId = useSelector((state) => state.roomdId.open)
// const dispatch = useDispatch()