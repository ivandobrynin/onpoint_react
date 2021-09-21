import React from 'react'
import { MiniSlider } from '../MiniSlider/MiniSlider'
import close from '../../../img/screen_3/btn_close.png'
import bottle from '../../../img/screen_3/bottle.png'
import './thirdScreenModal.min.css'

export const ThirdScreenModal = ({toggleModal}) => {
	return (
	<div className="modal-background">
		<div className="bottle">
				<img src={bottle} alt="bottle"/>
		</div>
		<div className="modal">
			<div className="modal__window">
				<button
					onClick={toggleModal}
					className="modal__window-close">
					<img src={close} alt="x"/>
				</button>
				<div className="modal__window-header">
					<div className="modal__window-header_subtitle">Преимущества</div>
					<div className="modal__window-header_title">BREND <span>XY</span></div>
				</div>
				<MiniSlider/>
			</div>
		</div>
		</div>
	)
}
