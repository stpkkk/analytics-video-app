import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../types'
import { seekToTimestamp } from '../../store/actions'
import { formatTime } from '../../utils'
import styles from './EventList.module.css'

function EventList() {
	const dispatch = useDispatch()
	const events = useSelector((state: RootState) => state.events)
	const containerHeight = 720

	return (
		<ul
			className={`thin-scroll ${styles.listContainer}`}
			style={{
				height: containerHeight,
			}}
		>
			{events.map(event => (
				<li
					key={event.timestamp}
					className={styles.listItem}
					onClick={() => dispatch(seekToTimestamp(event.timestamp))}
				>
					{formatTime(event.timestamp)}
				</li>
			))}
		</ul>
	)
}

export default EventList
