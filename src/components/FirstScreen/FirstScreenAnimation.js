import React from 'react'
import image_1 from '../../img/screen_1/sperm.png'
import image_2 from '../../img/screen_1/sperm_blurred.png'
import image_3 from '../../img/screen_1/spot_blurred.png'
import image_4 from '../../img/screen_1/spot_blurred_notEnough.png'
import image_5 from '../../img/screen_1/stick.png'
import image_6 from '../../img/screen_1/virus_big.png'
import image_7 from '../../img/screen_1/virus_middle.png'
import image_8 from '../../img/screen_1/virus_small.png'
import image_9 from '../../img/screen_1/virus_small_2.png'
import './firstScreenAnimation.min.css'



export const FirstScreenAnimation = () => {
	return (
		<>
			<img className="sod_1"src={image_1} alt="sperm"/>
			<img className="sod_2"src={image_2} alt="sperm__blurred"/>
			<img className="sod_3"src={image_3} alt="spot__blurred"/>
			<img className="sod_4"src={image_4} alt="spot__blurred2"/>
			<img className="sod_5"src={image_5} alt="stick"/>
			<img className="virus_1" src={image_6} alt="virus"/>
			<img className="virus_2" src={image_7} alt="virus2"/>
			<img className="virus_3" src={image_8} alt="virus3"/>
			<img className="virus_4" src={image_9} alt="virus4"/>
		</>
	)
}
