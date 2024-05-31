import { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, Event } from '../../types'
import { fetchEvents } from '../../store/actions'
import { EventRect } from '../event-rect'

function VideoPlayer() {
	const videoRef = useRef<HTMLVideoElement>(null)
	const dispatch = useDispatch()
	const events = useSelector((state: RootState) => state.events)

	const [activeEvents, setActiveEvents] = useState<Event[]>([])

	useEffect(() => {
		dispatch(fetchEvents())
	}, [dispatch])

	const handleTimeUpdate = () => {
		if (videoRef.current) {
			const currentTime = videoRef.current.currentTime
			const active = events.filter(
				event =>
					currentTime >= event.timestamp &&
					currentTime <= event.timestamp + event.duration
			)
			setActiveEvents(active)
		}
	}

	return (
		<>
			<video
				ref={videoRef}
				controls
				onTimeUpdate={handleTimeUpdate}
				data-testid='video-element'
				style={{ width: '100%' }}
			>
				<source
					src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
					type='video/mp4'
				/>
			</video>
			{activeEvents.map((event: Event) => (
				<EventRect key={event.timestamp} zone={event.zone} />
			))}
		</>
	)
}

export default VideoPlayer
