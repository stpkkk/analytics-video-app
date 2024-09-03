import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../types'
import { seekToTimestamp } from '../../store/actions'
import { formatTime } from '../../utils'
import styles from './EventList.module.css'

function EventList() {
	const dispatch = useDispatch()

	//By selecting only what is needed, you minimize unnecessary re-renders and improve the performance.
	const events = useSelector((state: RootState) => state.events)
	const loading = useSelector((state: RootState) => state.loading)
	const error = useSelector((state: RootState) => state.error)

	// Memoize the click handler to prevent unnecessary re-renders
	const handleEventClick = useCallback(
		(timestamp: number) => {
			dispatch(seekToTimestamp(timestamp))
		},
		[dispatch]
	)

	return (
		<div className={styles.listContainer}>
			{events.length > 0 && (
				<ul
					className={`thin-scroll ${styles.listContainer}`}
					style={{ height: 720 }}
				>
					{events.map(event => (
						<li
							key={event.timestamp}
							className={styles.listItem}
							onClick={() => handleEventClick(event.timestamp)}
						>
							{formatTime(event.timestamp)}
						</li>
					))}
				</ul>
			)}
			{error && <div>{error}</div>}
			{loading && (
				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-end',
					}}
				>
					Loading...
				</div>
			)}
		</div>
	)
}

export default EventList
