import React from 'react';
import { API_URL, CHAT_ID } from './utils/const';
import axios from 'axios';

const Booking = (props) => {
	const onClose = () => props.setBooking(!props.booking);


	// ________ controlled input ________________

	const [number, setNumber] = React.useState('');
	const [name, setName] = React.useState('');
	const [dateIn, setDateIn] = React.useState('');
	const [dateOut, setDateOut] = React.useState('');

	const onChangePhone = (event) => {
		setNumber(event.target.value);
	}
	const onChangeName = (event) => {
		setName(event.target.value);
	}
	const onChangeDateIn = (event) => {
		setDateIn(event.target.value);
	}
	const onChangeDateOut = (event) => {
		setDateOut(event.target.value);
	}

	// ________________ tg send _________________

	const handleSubmit = (event) => {
		event.preventDefault()

		let message = `<b>Заявка с сайта!</b>\n`;
		message += `Дата заезда:\n <b>${dateIn}</b>\n`;
		message += `Дата выезда:\n <b>${dateOut}</b>\n`;
		message += `ФИО:\n <b>${name}</b>\n`;
		message += `Телефон:\n <b>${number}</b>\n`;

		axios.post(API_URL, {
			chat_id: CHAT_ID,
			parse_mode: 'HTML',
			text: message
		})

	}

	return (
		<div className={props.booking ? 'popup__bg overlayActive' : 'popup__bg'} onClick={onClose}>

			<div className='booking__item' onClick={e => e.stopPropagation()}>
				<svg className="btn__close" onClick={onClose} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="10" stroke="#000000" strokeWidth="1.5"></circle> <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
				<h3 className='booking__title'>Забронировать номер</h3>
				<h4 className='booking__description'>Заполните форму. Мы свяжемся с Вами в ближайшее время.</h4>
				<form onSubmit={handleSubmit} className='booking__form'>
					<p>Выберите дату заезда</p>
					<input type='date' onChange={onChangeDateIn} value={dateIn} />
					<p>Выберите дату выезда</p>
					<input type='date' onChange={onChangeDateOut} value={dateOut} />
					<p>ФИО</p>
					<input onChange={onChangeName} value={name} type='text' className='form__text' />
					<p>Телефон*</p>
					<input onChange={onChangePhone} value={number} type='tel' className='form__text' />
					<button className='promo__button btn__booking btn__popup'>Забронировать</button>
				</form>
				<p className='disclaimer'>Нажимая кнопку вы подтверждаете, что ознакомились с Политикой конфиденциальности и принимаете ее условия. Мы не передаем Вашу персональную информацию третьим лицам</p>
			</div>
		</div>
	)
}

export default Booking
