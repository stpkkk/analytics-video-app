import { render } from '@testing-library/react'
import App from './App'

jest.mock('./components/event-list/EventList', () => () => (
	<div>EventList Component</div>
))
jest.mock('./components/video-player/VideoPlayer', () => () => (
	<div>VideoPlayer Component</div>
))
jest.mock('./components/footer/Footer', () => () => <div>Footer Component</div>)

test('renders App component correctly', () => {
	const { getByText } = render(<App />)

	expect(getByText('EventList Component')).toBeInTheDocument()
	expect(getByText('VideoPlayer Component')).toBeInTheDocument()
	expect(getByText('Footer Component')).toBeInTheDocument()
})
