export const roomsList = [
	{ title: 'Двухместный комфорт', imageUrl: '/images/rooms/room1_1.png', images: ['/images/rooms/room1_1.png', '/images/rooms/room1_2.png', '/images/rooms/room1_3.png'], price: '2000' },
	{ title: 'Трехместный комфорт', imageUrl: '/images/rooms/room2_1.png', images: ['/images/rooms/room2_1.png', '/images/rooms/room1_3.png', '/images/rooms/room2_4.png'], price: '2500' },
	{ title: 'Люкс', imageUrl: '/images/rooms/room3_1.png', images: ['/images/rooms/room3_1.png', '/images/rooms/room3_2.png', '/images/rooms/room3_3.png', '/images/rooms/room3_4'], price: '3500' },
]



const Rooms = (props) => {
	return (
		<div className="rooms__item">
			<div className="rooms__title">{props.title}</div>
			<img className="rooms__image" src={props.imageUrl} />
			<div className="rooms__price">от {props.price} ₽</div>
		</div>
	)
}

export default Rooms
// {
// 	props.images.map((item) => (<img className="rooms__images" src={item} key={item} />))
// }