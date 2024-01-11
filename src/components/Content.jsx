import React from 'react'
import Advantages, { advList } from './sections/Advantages';
import Nearby, { nearbyList } from './Nearby'
import PopUp from './modal/PopUp';
import Booking from './modal/Booking';
import OneClick from './modal/OneClick';

import PromoSection from './sections/PromoSection'
import ContactsSection from './sections/ContactsSection';
import RoomsSection from './sections/RoomsSection'


const Content = () => {


	const [open, setOpen] = React.useState(false) // попап номера
	const [booking, setBooking] = React.useState(false)  // попап бронирования




	return (
		<div className='content'>
			<PromoSection />
			<section className="advantages" id='1'>
				<div className="container">
					<h2 className='advantages__welcome'>На территории комплекса</h2>
					<div className="advantages__container">
						{
							advList.map((item) => (<Advantages key={item.title} {...item} />))
						}
					</div>
				</div>

			</section>

			<RoomsSection />
			<section className="nearby" id='3'>
				<div className="container">
					<h2 className='nearby__welcome'>Что есть неподалеку</h2>
					<div className="nearby__container">
						{
							nearbyList.map((item) => (<Nearby key={item.title} {...item} />))
						}
					</div>
				</div >
			</section>
			<ContactsSection />
			<PopUp setOpen={setOpen} open={open} setBooking={setBooking} booking={booking} />
			<Booking />
			<OneClick />
		</div>
	)
}

export default Content
