import React, { useState } from 'react'
import { ThirdScreenModal } from './Modal/ThirdScreenModal'
import { ThirdScreenContent } from './Content/ThirdScreenContent'
import { ThirdScreenAnimation } from './Animation/ThirdScreenAnimation'

export const ThirdScreen = () => {
	const [showModal, setShowModal] = useState(false)
	const toggleModal = () => {
		setShowModal(prev => !prev)
	}
	return (
		<div className="slider__item thirdScreen">
			{ showModal ? 
				<ThirdScreenModal toggleModal={toggleModal}/>
				: 
				<ThirdScreenContent toggleModal={toggleModal}/>
			}
			<ThirdScreenAnimation/>
		</div>
	)
}
