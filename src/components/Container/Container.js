import React, { useState, useRef, useEffect } from 'react'
import { FirstScreen } from '../FirstScreen/FirstScreen'
import { SecondScreen } from '../SecondScreen/SecondScreen'
import { ThirdScreen } from '../ThirdScreen/ThirdScreen'
import logo from '../../img/screen_1/main_logo.png'
// import './container.min.css'
import '../Container/container.min.css'

export const Container = () => {
	const [position, setPosition] = useState(0)
	const [coordinates, setCoordinates] = useState({x1: 0, y1: 0})
	const [showAnimation, setShowAnimation] = useState(false)
	const trackWidth = useRef(3072)
	const itemWidth = useRef(1024)

	useEffect(() => {
		if (Math.abs(position) === 1024) {
			setShowAnimation(true)
		}
	}, [position])

	const clearCoordinates = () => {
		setCoordinates({x1: 0, y1: 0})
	}
	const returnHome = () => {
		setPosition(0)
		clearCoordinates()
	}

	const leftMove = () => {
		setPosition(prev => prev + itemWidth.current)
		clearCoordinates()
	}
	
	const rightMove = () => {
		setPosition(prev => prev - itemWidth.current)
		clearCoordinates()
	}

	const handleTouchStart = (event) => {
		const firstTouch = event.touches[0];
		setCoordinates({x1: firstTouch.clientX, y1: firstTouch.clientY})
	}

	const handleTouchMove = (event) => {
		if (!coordinates.x1 || !coordinates.y1) {
			return false
		}
		if (event.target.classList.contains('secondScreen__descr')) {
			return false
		}
		setCoordinates(prev => {
			return {
				...prev, 
				x2: event.touches[0].clientX, 
				y2: event.touches[0].clientY
			}
		})
		let xDiff = coordinates?.x2 - coordinates.x1
		let yDiff = coordinates?.y2 - coordinates.y1
		if (Math.abs(xDiff) > Math.abs(yDiff)) {
			if (xDiff > 0) {
				//left
				if (Math.abs(position) < itemWidth.current) {
					return false
				} else {
					leftMove()
				}
			} else {
				//right
				if (Math.abs(position) >= (trackWidth.current - itemWidth.current)) {
					return false
				} else {
					rightMove()
				}
			}
		} else {
			return false
		}
	}

	return (
		<div className="container">
			<div 
				onClick={returnHome}
				className="logo">
				<img src={logo} alt="logo"/>
			</div>
			<div 
				className="track" 
				style={{transform: `translateX(${position}px)`}}
				onTouchStart={(e) => handleTouchStart(e)}
				onTouchMove={(e) => handleTouchMove(e)}
				>
				<FirstScreen moveRight={rightMove}/>
				<SecondScreen show={showAnimation}/>
				<ThirdScreen/>
			</div>
		</div>
	)
}