import { roomsList } from "../Rooms"
import React from "react"

const PopUp = (props) => {
	let list = roomsList[props.roomId]
	const onClose = () => props.setOpen(!props.open);
	const bookingHandler = () => {
		props.setBooking(!props.booking)
		props.setOpen(!props.open)
	}

	return (
		<div className={props.open ? 'popup__bg overlayActive' : 'popup__bg'} onClick={onClose}>
			<div className={props.open ? 'popup__item test' : 'popup__item'} onClick={e => e.stopPropagation()}>
				<svg className="btn__close" onClick={onClose} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="10" stroke="#000000" strokeWidth="1.5"></circle> <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
				<h3>{list.title}</h3>
				<div className='popup__carousel'> карусель фотографий номера</div>
				<h4>Описание номера:</h4>
				{list.description.map((item) => (<li key={item.id}>{item}</li>))}
				<h4>В стоимость номера входят:</h4>
				<li>Замена постельного белья</li>
				<li>Уборка номера</li>
				<li>Замена полотенец</li>
				<li>Завтрак с 9:00 до 11:00</li>
				<h4>Цены на проживание:</h4>

				<table>
					<tr>
						<th className="popup__columns">Дата</th>
						<th>Стоимость</th>
					</tr>
					<tr>
						<td>01.01 - 30.06</td>
						<td>{list.price}₽</td>
					</tr>

					<tr>
						<td>01.07 - 31.08</td>
						<td>{list.price * 1.5}₽</td>
					</tr>

					<tr>
						<td>01.09 - 31.12</td>
						<td>{list.price}₽</td>
					</tr>

				</table>
				<button onClick={bookingHandler} className="promo__button btn__booking btn__popup">Забронировать</button>

			</div>
		</div>
	)
}

export default PopUp


