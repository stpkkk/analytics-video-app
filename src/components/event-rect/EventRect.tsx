import styles from './EventRect.module.css'

interface EventRectProps {
	zone: {
		left: number
		top: number
		width: number
		height: number
	}
}

function EventRect({ zone }: EventRectProps) {
	return (
		<div
			className={styles.rect}
			style={{
				top: zone.top,
				left: zone.left,
				width: zone.width,
				height: zone.height,
			}}
		/>
	)
}

export default EventRect
