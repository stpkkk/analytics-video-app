import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { RootState, Event } from '../store/types'
import { fetchEvents } from '../store/actions'
import EventRect from './EventRect'

function VideoPlayer() {
	const videoRef = useRef<HTMLVideoElement>(null)
	const containerRef = useRef<HTMLDivElement>(null)
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
		<div ref={containerRef} style={{ position: 'relative' }}>
			<video ref={videoRef} controls onTimeUpdate={handleTimeUpdate}>
				<source
					src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
					type='video/mp4'
				/>
			</video>
			{activeEvents.map((event: Event) => (
				<EventRect key={event.timestamp} zone={event.zone} />
			))}
		</div>
	)
}

export default VideoPlayer
