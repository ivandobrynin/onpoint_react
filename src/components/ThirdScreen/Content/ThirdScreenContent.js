import React from 'react'
import btn from '../../../img/screen_3/btn.png'
import bottle from '../../../img/screen_3/bottle.png'
import './thirdScreenContent.min.css'

export const ThirdScreenContent = ({toggleModal}) => {
	return (
		<div className="content-background">
			<div className="bottle">
				<img src={bottle} alt="bottle"/>
			</div>
			<div className="content">
				<div className="content__header">
					<div className="content__header-subtitle">Ключевое сообщение</div>
					<div className="content__header-title">BREND <span>XY</span></div>
				</div>
				<div className="content__cards">
					<div className="content__cards-left">
						3 раза в день после<br/>еды. После приема<br/>препарата рекомен<br/>-дуется воздержаться<br/>от пищи и напитков <br/>в течение 1 часа 
					</div>
					<div className="content__cards-right">
						<div className="content__cards-right_descr">
							Курс лечения от<br/>7 дней до 1 мес.
						</div>
						<button className="content__cards-right_button" onClick={() => toggleModal()}>
							<img src={btn} alt="btn"/>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
