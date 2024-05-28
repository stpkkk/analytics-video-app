import { useSelector } from 'react-redux'
import { RootState } from '../store/types'
import { formatTime } from '../utils'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchEvents, seekToTimestamp } from '../store/actions'

function EventList() {
	const dispatch = useDispatch()
	const events = useSelector((state: RootState) => state.events)

	useEffect(() => {
		dispatch(fetchEvents())
	}, [dispatch])

	return (
		<ul>
			{events.map(event => (
				<li
					key={event.timestamp}
					onClick={() => dispatch(seekToTimestamp(event.timestamp))}
				>
					{formatTime(event.timestamp)}
				</li>
			))}
		</ul>
	)
}
export default EventList
