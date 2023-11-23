export const roomsList = [
	{ id: 0, title: 'Двухместный комфорт', imageUrl: '/images/rooms/room1_1.png', images: ['/images/rooms/room1_1.png', '/images/rooms/room1_2.png', '/images/rooms/room1_3.png'], price: '2000', description: ['с/у', 'удобная мебель в современном стиле', 'индивидуальная система кондиционирования воздуха', 'жк телевизор', 'Wi-Fi доступ в интернет', 'полотенце для душа, для рук, ног, тапочки, жидкое мыло', 'фен', 'мини-холодильник', 'чайный набор', 'сушилка для белья', 'гладильные принадлежности на этаже'] },
	{ id: 1, title: 'Трехместный комфорт', imageUrl: '/images/rooms/room2_1.png', images: ['/images/rooms/room2_1.png', '/images/rooms/room1_3.png', '/images/rooms/room2_4.png'], price: '2500', description: ['с/у', 'удобная мебель в современном стиле', 'индивидуальная система кондиционирования воздуха', 'жк телевизор', 'Wi-Fi доступ в интернет', 'полотенце для душа, для рук, ног, тапочки, жидкое мыло', 'фен', 'мини-холодильник', 'чайный набор', 'сушилка для белья', 'гладильные принадлежности на этаже'] },
	{ id: 2, title: 'Люкс', imageUrl: '/images/rooms/room3_1.png', images: ['/images/rooms/room3_1.png', '/images/rooms/room3_2.png', '/images/rooms/room3_3.png', '/images/rooms/room3_4.png'], price: '3500', description: ['комфортная мебель в современном стиле', 'индивидуальная система кондиционирования воздуха', 'жк телевизор', 'Wi-Fi доступ в интернет', 'полотенце для душа, для рук, ног, тапочки, жидкое мыло', 'фен, сушилка для белья', 'мини-холодильник, чайный набор', 'гладильные принадлежности на этаже'] },
]


const Rooms = (props) => {
	const onClickRooms = () => {
		props.setOpen(!props.open);
		props.setRoomId(props.id)
	}
	return (
		<div className="rooms__item" onClick={onClickRooms}>
			<div className="rooms__title">{props.title}</div>
			<img className="rooms__image" src={props.imageUrl} alt={props.title} />
		</div>
	)
}

export default Rooms
