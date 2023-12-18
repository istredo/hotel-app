import React from 'react'

const Header = () => {
	const headerList = ['Главная', 'Преимущества', 'Номера', 'Досуг', 'Контакты']
	return (
		<header>
			<div className="header__container">
				<svg className='header__logo' xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24">
					<path stroke="#7b8a8a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9.778V15M5 15V9.7773m16 2.2225-5.4332-6.036c-1.2357-1.3728-1.8535-2.0591-2.5812-2.3125a3 3 0 0 0-1.9737.0001c-.7276.2535-1.3453.94-2.5808 2.313L3 11.9997m0 8.005s.6942-1.1192 1.8-.9952C6.0608 19.151 7.1327 21 8.4 21c1.2672 0 2.3327-1.9904 3.6-1.9904S14.3327 21 15.6 21c1.2672 0 2.3392-1.849 3.6-1.9904 1.1058-.124 1.8.9952 1.8.9952M10 11h4v4h-4v-4Z" />
				</svg>
				<ul className='header__list'>
					{
						headerList.map((li, i) => (<a href={`#${i}`} key={i} className='list__item'>{li}</a>))
					}
				</ul>
				<div className="header__contacts">
					<div className='header__contactsTop'>
						<svg className='phone__image' width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#7b8a8a"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4.00655 7.93309C3.93421 9.84122 4.41713 13.0817 7.6677 16.3323C8.45191 17.1165 9.23553 17.7396 10 18.2327M5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C15.2529 20.0243 14.1963 19.9541 13 19.6111" stroke="#7b8a8a" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
						<a className='phone header__number' href="tel:+79990000">+7-999-00-00</a>
					</div>
					<p>Приём заявок на сайте 24/7</p>
				</div>
			</div>
		</header>
	)
}

export default Header
