import React from 'react'

const OneClick = (props) => {
	const onClose = () => props.setOneclick(!props.oneclick);
	return (
		<div className={props.oneclick ? 'popup__bg overlayActive' : 'popup__bg'} onClick={onClose}>
			<div className='oneClick__item' onClick={e => e.stopPropagation()}>
				<svg className="btn__close" onClick={onClose} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="10" stroke="#000000" strokeWidth="1.5"></circle> <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
				<h3 className='oneClick__title'>Обратная связь</h3>
				<h4 className='oneClick__description'>Оставьте свои контакты и с Вами свяжутся в ближайшее время!</h4>

				<form className='booking__form'>
					<p>ФИО</p>
					<input type='text' className='form__text' />
					<p>Телефон</p>
					<input type='tel' className='form__text' />
					<button className='promo__button btn__booking btn__popup'>Забронировать</button>
				</form>
				<p className='disclaimer'>Нажимая кнопку вы подтверждаете, что ознакомились с Политикой конфиденциальности и принимаете ее условия. Мы не передаем Вашу персональную информацию третьим лицам</p>
			</div>
		</div >
	)
}

export default OneClick

