import React from 'react'
import { API_URL, CHAT_ID } from '../utils/const';
import axios from 'axios';

const OneClick = (props) => {

	const onClose = () => props.setOneclick(!props.oneclick);


	// ________ controlled input ________________

	const [number, setNumber] = React.useState('');
	const [name, setName] = React.useState('');

	const onChangePhone = (event) => {
		setNumber(event.target.value);
	}
	const onChangeName = (event) => {
		setName(event.target.value);
	}


	// ________________ tg send _________________

	const handleSubmit = (event) => {
		event.preventDefault()

		let message = `<b>Заявка с сайта!</b>\n`;

		message += `ФИО:\n <b>${name}</b>\n`;
		message += `Телефон:\n <b>${number}</b>\n`;


		axios.post(API_URL, {
			chat_id: CHAT_ID,
			parse_mode: 'HTML',
			text: message
		})
			.then((res) => {
				setNumber('');
				setName('');
			})
			.catch((err) => {
				console.log(err)
			})
			.finally(() => {
				console.log('Форма успешно отправлена')
			})

	}


	return (
		<div className={props.oneclick ? 'popup__bg overlayActive' : 'popup__bg'} onClick={onClose}>
			<div className={props.oneclick ? 'oneClick__item itemActive' : 'oneClick__item'} onClick={e => e.stopPropagation()}>
				<svg className="btn__close" onClick={onClose} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="10" stroke="#000000" strokeWidth="1.5"></circle> <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
				<h3 className='oneClick__title'>Обратная связь</h3>
				<h4 className='oneClick__description'>Оставьте свои контакты и с Вами свяжутся в ближайшее время!</h4>

				<form onSubmit={handleSubmit} className='booking__form'>
					<p>ФИО</p>
					<input type='text' onChange={onChangeName} value={name} maxlength="30" placeholder='Как могу обращаться?' className='form__text' />
					<p>Телефон</p>
					<input type='tel' onChange={onChangePhone} value={number} maxlength="20" placeholder='Введите номер в любом формате' className='form__text form__des' />
					<button className='promo__button btn__booking btn__popup'>Забронировать</button>
				</form>
				<p className='disclaimer'>Нажимая кнопку вы подтверждаете, что ознакомились с Политикой конфиденциальности и принимаете ее условия. Мы не передаем Вашу персональную информацию третьим лицам</p>
			</div>
		</div >
	)
}

export default OneClick

