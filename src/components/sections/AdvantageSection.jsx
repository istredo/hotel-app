import React from 'react'
import Advantages, { advList } from './Advantages';

const AdvantageSection = () => {
	return (
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
	)
}

export default AdvantageSection
