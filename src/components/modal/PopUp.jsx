import { roomsList } from "../Rooms"
import React from "react"
import { CAROUSEL_WIDTH } from "../utils/const";


const PopUp = (props) => {
	let list = roomsList[props.roomId]
	const onClose = () => props.setOpen(!props.open);
	const bookingHandler = () => {
		props.setBooking(!props.booking)
		props.setOpen(!props.open)
	}



	let [carousel, setCarousel] = React.useState(0)
	let max__width = -(list.images.length * CAROUSEL_WIDTH) + CAROUSEL_WIDTH
	let handleArrowRight = () => {
		setCarousel((currentPosition) => {
			let position
			currentPosition === max__width ? position = 0 : position = currentPosition - CAROUSEL_WIDTH
			return position
		})
	}
	let handleArrowLeft = () => {
		setCarousel((currentPosition) => {
			let position
			currentPosition === 0 ? position = max__width : position = currentPosition + CAROUSEL_WIDTH
			return position
		})
	}


	return (
		<div className={props.open ? 'popup__bg overlayActive' : 'popup__bg'} onClick={onClose}>
			<div className={props.open ? 'popup__item test' : 'popup__item'} onClick={e => e.stopPropagation()}>
				<svg className="btn__close" onClick={onClose} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="10" stroke="#000000" strokeWidth="1.5"></circle> <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
				<h3>{list.title}</h3>

				<div className='popup__carousel' style={{ maxWidth: `${CAROUSEL_WIDTH}vw`, }}>

					<svg className='carousel_arrow arrow__left' onClick={handleArrowLeft} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="#0F0F0F" d="M16.1795 3.2687c-.3906-.3905-1.0237-.3905-1.4143 0L8.1208 9.9132c-1.1713 1.1713-1.1716 3.0701-.0008 4.2418l6.5703 6.5754c.3905.3906 1.0237.3906 1.4142 0 .3905-.3905.3905-1.0237 0-1.4142l-6.572-6.572c-.3906-.3906-.3906-1.0237 0-1.4142l6.647-6.647c.3905-.3906.3905-1.0237 0-1.4143Z" /></svg>

					<div className="carousel__container" style={{ transform: `translateX(${carousel}vw)` }}>
						{list.images.map((item) => <img className="carousel__item" src={item} alt='rooms' key={item} />)}
					</div>

					<svg className='carousel_arrow arrow__right' onClick={handleArrowRight} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="#0F0F0F" d="M16.1795 3.2687c-.3906-.3905-1.0237-.3905-1.4143 0L8.1208 9.9132c-1.1713 1.1713-1.1716 3.0701-.0008 4.2418l6.5703 6.5754c.3905.3906 1.0237.3906 1.4142 0 .3905-.3905.3905-1.0237 0-1.4142l-6.572-6.572c-.3906-.3906-.3906-1.0237 0-1.4142l6.647-6.647c.3905-.3906.3905-1.0237 0-1.4143Z" /></svg>

				</div>
				<ul className="popup__desc">Описание номера:
					{list.description.map((item) => (<li key={item} className="popup__list">{item}</li>))}
				</ul>

				<ul className="popup__desc">В стоимость номера входят:
					<li className="popup__list">Замена постельного белья</li>
					<li className="popup__list">Уборка номера</li>
					<li className="popup__list">Замена полотенец</li>
					<li className="popup__list">Завтрак с 9:00 до 11:00</li>
				</ul>
				<h4 className="popup__desc">Цены на проживание:</h4>

				<table>
					<tbody>
						<tr>
							<th>Дата</th>
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
					</tbody>
				</table>
				<button onClick={bookingHandler} className="promo__button btn__popup">Забронировать</button>
			</div>
		</div >
	)
}

export default PopUp


