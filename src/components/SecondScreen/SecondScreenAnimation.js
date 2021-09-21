import React from 'react'
import sperm_1 from '../../img/screen_2/sperm_1.png'
import sperm_2 from '../../img/screen_2/sperm_2.png'
import sperm_3 from '../../img/screen_2/sperm_3.png'
import sperm_4 from '../../img/screen_2/sperm_4.png'
import sperm_5 from '../../img/screen_2/sperm_5.png'
import './secondScreenAnimation.min.css'

export const SecondScreenAnimation = ({show}) => {
	return (
		<>
			{
				show ?
				<>
					<img className="sperm_1" src={sperm_1} alt="sperm"/>
					<img className="sperm_2" src={sperm_2} alt="sperm"/>
					<img className="sperm_3" src={sperm_3} alt="sperm"/>
					<img className="sperm_4" src={sperm_4} alt="sperm"/>
					<img className="sperm_5" src={sperm_5} alt="sperm"/>
				</>
				: null
			}
		</>
	)
}
