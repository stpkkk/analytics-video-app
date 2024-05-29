import { render, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import VideoPlayer from './VideoPlayer'
import { RootState } from '../../types'

const mockStore = configureStore([])

test('renders VideoPlayer component correctly', () => {
	const store = mockStore({
		events: [],
	} as RootState)

	const { container } = render(
		<Provider store={store}>
			<VideoPlayer />
		</Provider>
	)

	const videoElement = container.querySelector('video')
	expect(videoElement).toBeInTheDocument()
})

test('updates active events when video time updates', () => {
	const mockEvents = [
		{
			timestamp: 0,
			duration: 5,
			zone: { left: 10, top: 20, width: 100, height: 50 },
		},
		{
			timestamp: 6,
			duration: 5,
			zone: { left: 50, top: 30, width: 80, height: 40 },
		},
	]

	const store = mockStore({
		events: mockEvents,
	} as RootState)

	const { getByTestId } = render(
		<Provider store={store}>
			<VideoPlayer />
		</Provider>
	)

	const videoElement = getByTestId('video-element')
	fireEvent(videoElement, new Event('timeupdate'))
})
