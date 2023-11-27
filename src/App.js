import React from 'react';
import { Map, YMaps, Placemark } from '@pbe/react-yandex-maps';

import './App.css';

import Header from './components/Header';
import Advantages, { advList } from './components/Advantages';
import Rooms, { roomsList } from './components/Rooms';
import Nearby, { nearbyList } from './components/Nearby';
import PopUp from './components/modal/PopUp';
import Booking from './components/modal/Booking';
import OneClick from './components/modal/OneClick';
import Footer from './components/Footer';



function App() {
	const [open, setOpen] = React.useState(false) // попап номера
	const [booking, setBooking] = React.useState(false)  // попап бронирования
	const [oneclick, setOneclick] = React.useState(false)  // попап обратного звонка

	const [roomId, setRoomId] = React.useState(0)

	const oneClickHandler = () => setOneclick(!oneclick)

	return (
		<div className="App">
			{< Header />}
			<div className='content'>
				<div className="promo" id='0'>
					<div className="container">
						<h1 className='promo__title'>Гостевой дом “Море и Горы”</h1>
						<h3 className='promo__description'>Если вы хотите насладиться красотой природы, побаловать себя комфортом и уютом, а также попробовать разнообразные виды активного отдыха, то гостевой дом “Море и Горы” ждет вас! <br />
							Гостевой дом расположен в живописном месте на склоне горы, всего в 10 минутах езды от песчаного пляжа.  <br />
							Здесь вы сможете наслаждаться видом на море и горы из окон своих номеров, а также насладиться свежим горным воздухом. <br />
							Предлагаем вам размещение в уютных номерах различных категорий, оборудованных всем необходимым для комфортного проживания. <br />
							В гостевом доме есть ресторан, где вы сможете попробовать блюда европейской и национальной кухни, приготовленные из свежих и качественных продуктов.  <br />
						</h3>
						<div className='promo__contacts'>
							<svg className='promo__image' width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#7b8a8a"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4.00655 7.93309C3.93421 9.84122 4.41713 13.0817 7.6677 16.3323C8.45191 17.1165 9.23553 17.7396 10 18.2327M5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C15.2529 20.0243 14.1963 19.9541 13 19.6111" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
							<a className='phone promo__number' href="tel:+79990000">+7-999-00-00</a>
						</div>
						<div className='promo__buttons'>
							<button onClick={oneClickHandler} className='btn__booking promo__button'>Забронировать в 1 клик</button>
							{/* <button className='btn__callback promo__button'>Обратный звонок</button> */}
						</div>
					</div>
				</div>
				<div className="advantages" id='1'>
					<div className="container">
						<h2 className='advantages__welcome'>На территории комплекса</h2>
						<div className="advantages__container">
							{
								advList.map((item) => (<Advantages key={item.title} {...item} />))
							}
						</div>
					</div>

				</div>

				<div className="rooms" id='2'>
					<div className='container'>
						<h2 className="rooms__welcome">Номера и цены</h2>
						<div className="rooms__container">
							{
								roomsList.map((item) => (<Rooms key={item.title} {...item} open={open} setOpen={setOpen} roomId={roomId} setRoomId={setRoomId} />))
							}

						</div>
					</div>
				</div>
				<div className="nearby" id='3'>
					<div className="container">
						<h2 className='nearby__welcome'>Что есть неподалеку</h2>
						<div className="nearby__container">
							{
								nearbyList.map((item) => (<Nearby key={item.title} {...item} />))
							}
						</div>
					</div >
				</div>
				<div className="contacts" id='4'>
					<div className="container contacts__container">
						<div className='contacts__content'>
							<h3 className='contacts__title contacts__border'>Контакты:</h3>
							<p className='contacts__adress'><b>Адрес:</b> <br /> Россия, Сочи</p>
							<div className='contacts__phone contacts__border'>Телефон:<br />
								<a className='contacts__number phone' href="tel:+79990000">+7-999-00-00</a>
							</div>
							<button onClick={oneClickHandler} className='btn__callback promo__button contacts__btn'>Обратный звонок</button>
						</div>
						{!open && <YMaps>
							<Map
								width='30vw'
								height='40vh'
								z-index='-1'
								defaultState={{
									center: [43.399126, 39.953167],
									zoom: 16,
									controls: ["zoomControl", "fullscreenControl"],
								}}
								modules={["control.ZoomControl", "control.FullscreenControl"]}
							>
								<Placemark defaultGeometry={[43.399126, 39.953167]} />
							</Map>
						</YMaps>}
						<PopUp key={roomId} roomId={roomId} setOpen={setOpen} open={open} setBooking={setBooking} booking={booking} />
						<Booking setBooking={setBooking} booking={booking} />
						<OneClick setOneclick={setOneclick} oneclick={oneclick} />

					</div>
				</div>

			</div>
			<Footer />
		</div >
	);
}

export default App;
