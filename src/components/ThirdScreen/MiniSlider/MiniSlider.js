import React, { useState, useRef } from 'react'
import prev from '../../../img/screen_3/prev.png'
import next from '../../../img/screen_3/next.png'
import './miniSlider.min.css'

export const MiniSlider = () => {

	const [showFirst, setShowFirst] = useState(true)
	const [showSecond, setShowSecond] = useState(false)
	const rightDot = useRef()
	const leftDot = useRef()

	const toggleSliders = () => {
		setShowFirst(prev => !prev)
		setShowSecond(prev => !prev)
		if (rightDot.current.classList.contains('active')) {
			rightDot.current.classList.remove('active')
		} else {
			rightDot.current.classList.add('active')
		}
		if (leftDot.current.classList.contains('active')) {
			leftDot.current.classList.remove('active')
		} else {
			leftDot.current.classList.add('active')
		}
	}
	return (
			<div className="miniSlider">
			{
				showFirst ? 
					<ul className="miniSlider__content">
						<li>
							<div className="miniSlider__content-num">01</div>
							<div className="miniSlider__content-text">Самое важное и ключевое преимущество нашего препарата</div>
						</li>
						<li>
							<div className="miniSlider__content-num">02</div>
							<div className="miniSlider__content-text">Второе по важностипреимущество</div>
						</li>
						<li>
							<div className="miniSlider__content-num">03</div>
							<div className="miniSlider__content-text">Ещё одно не важное преимущество препарата</div>
						</li>
					</ul>
				: null
			}
			{
				showSecond ?
				<ul className="miniSlider__content">
					<li>
						<div className="miniSlider__content-num">04</div>
						<div className="miniSlider__content-text">Ещё одно не менее важное преимущество препарата</div>
					</li>
					<li>
						<div className="miniSlider__content-num">05</div>
						<div className="miniSlider__content-text">Ещё одно важное преимущество препарата</div>
					</li>
					<li>
						<div className="miniSlider__content-num">06</div>
						<div className="miniSlider__content-text">Ещё одно не важное преимущество препарата</div>
					</li>
				</ul>	
				: null
			}
			<div className="miniSlider__buttons">
				<div
					onClick={toggleSliders}
					className="miniSlider__buttons-prev">
					<img src={prev} alt="<"/>
				</div>
				<ul className="miniSlider__buttons-dots">
					<li ref={rightDot} className="dot active"></li>
					<li ref={leftDot} className="dot"></li>
				</ul>
				<div
					onClick={toggleSliders}
					className="miniSlider__buttons-next">
					<img src={next} alt=">"/>
				</div>
			</div>
		</div>
	)
}
