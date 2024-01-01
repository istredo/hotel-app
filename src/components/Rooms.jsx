import { useDispatch } from 'react-redux'
import { modalToggle, changeId } from '../redux/slices/roomsSlice'


const Rooms = (props) => {
	const dispatch = useDispatch()

	const onClickRooms = () => {
		dispatch(modalToggle())
		dispatch(changeId(props.id))

	}
	return (
		<div className="rooms__item" onClick={onClickRooms}>
			<div className="rooms__title">{props.title}</div>
			<img className="rooms__image" src={props.imageUrl} alt={props.title} />
		</div>
	)
}

export default Rooms


