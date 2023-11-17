export const advList = [
	{ title: 'Парковка', description: 'Бесплатная парковка на 20 автомобилей.', imageUrl: '/images/advantages/parking.jpg' },
	{ title: 'Кафе-столовая', description: 'На территории работает кафе-столовая. Осуществляется доставка еды и напитков в номер.', imageUrl: '/images/advantages/restaraunt.jpg' },
	{ title: 'Зона отдыха', description: 'Живая музыка, караоке и изысканые коктейли.', imageUrl: '/images/advantages/chill.jpg' },
	{ title: 'Бассейн', description: 'Вы можете насладиться открытым бассейном с подогревом.', imageUrl: '/images/advantages/pool.jpg' },
	{ title: 'Wi-fi', description: 'Бесплатный Wi-Fi на территории отеля.', imageUrl: '/images/advantages/wifi.jpg' },
];


const Advantages = (props) => {
	return (
		<div className='advantages__item'>
			<img className='advantages__img' src={props.imageUrl} alt={props.title} />
			<h4 className='advantages__title'>{props.title}</h4>
			<div className='advantages__description'>{props.description}
			</div>
		</div >
	)
}
// src={props.imageUrl}
// 
export default Advantages
