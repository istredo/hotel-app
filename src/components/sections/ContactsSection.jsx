import React from 'react'
import { Map, YMaps, Placemark } from '@pbe/react-yandex-maps';
import { useDispatch } from 'react-redux'
import { modalToggle } from '../../redux/slices/oneClickSlice'

const ContactsSection = () => {

	const dispatch = useDispatch()
	return (
		<section className="contacts" id='4'>
			<div className="container contacts__container">
				<div className='contacts__content'>
					<h3 className='contacts__title contacts__border'>Контакты:</h3>
					<p className='contacts__adress'><b>Адрес:</b> <br /> Россия, Сочи</p>
					<div className='contacts__phone contacts__border'>Телефон:<br />
						<a className='contacts__number phone' href="tel:+79990000">+7-999-00-00</a>
					</div>
					<button onClick={() => dispatch(modalToggle())} className='btn__callback promo__button contacts__btn'>Обратный звонок</button>
				</div>

				<YMaps>
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
				</YMaps>


			</div>
		</section>
	)
}

export default ContactsSection
