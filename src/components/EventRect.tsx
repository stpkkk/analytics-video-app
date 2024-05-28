import React from 'react'

interface EventRectProps {
	zone: {
		left: number
		top: number
		width: number
		height: number
	}
}

const EventRect: React.FC<EventRectProps> = ({ zone }) => {
	return (
		<div
			style={{
				position: 'absolute',
				top: zone.top,
				left: zone.left,
				width: zone.width,
				height: zone.height,
				pointerEvents: 'none',
				boxSizing: 'border-box',
				background: 'green',
			}}
		/>
	)
}

export default EventRect
