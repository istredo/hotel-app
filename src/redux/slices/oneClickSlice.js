//pop-up обратного звонка

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	open: false,
}

export const oneClickSlice = createSlice({
	name: 'oneClick',
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
	},
})


export const { modalOpen, modalClose, modalToggle } = oneClickSlice.actions

export default oneClickSlice.reducer


// import { useSelector, useDispatch } from 'react-redux'
// import { modalClose } from '../redux/slices/modalSlice'

// const modal = useSelector((state) => state.oneClick.open)
// const dispatch = useDispatch()