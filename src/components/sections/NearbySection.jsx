import React from 'react'
import Nearby from '../Nearby'
import { nearbyList } from '../Nearby'

const NearbySection = () => {
	return (
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
	)
}

export default NearbySection
