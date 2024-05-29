import { render, fireEvent } from '@testing-library/react'
import Footer from './Footer'

test('renders Footer component correctly', () => {
	const { container } = render(<Footer />)
	const linkElement = container.querySelector(
		'a[href="https://github.com/stpkkk/analytics-video-app"]'
	)
	expect(linkElement).toBeInTheDocument()
})

test('footer link opens in new tab', () => {
	const { container } = render(<Footer />)
	const linkElement = container.querySelector(
		'a[href="https://github.com/stpkkk/analytics-video-app"]'
	)

	if (linkElement) {
		fireEvent.click(linkElement)
		expect(linkElement).toHaveAttribute('target', '_blank')
	} else {
		throw new Error('Link element not found')
	}
})
