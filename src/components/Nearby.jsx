export const nearbyList = [
	{ title: 'Термальные источники', imageUrl: '/images/nearby/hot_spring.jpg', description: 'Термальный источник с бассейном' },
	{ title: 'Морская набережная', imageUrl: '/images/nearby/seafront.jpg', description: 'Набережная с прекрасным видом' },
	{ title: 'Городской маяк', imageUrl: '/images/nearby/lighthouse.jpg', description: 'Символ моряков и влюбленных - Маяк' },
	{ title: 'Парк развлечений', imageUrl: '/images/nearby/circus.jpg', description: 'Самый большой парк Восточного полушария' },
	{ title: 'Активные виды спорта', imageUrl: '/images/nearby/windsurf.jpg', description: 'Варианты морского отдыха' },
	{ title: 'Походы в горы', imageUrl: '/images/nearby/campfire.jpg', description: 'Поход на пикник в горах' },

]


const Nearby = (props) => {
	return (
		<div className="nearby__item">
			<div className="nearby__title">{props.title}</div>
			<img className='nearby__img' src={props.imageUrl} alt={props.title} />
			<div className="nearby__description">{props.description}</div>
		</div>
	)
}
export default Nearby
