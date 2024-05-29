import { render } from '@testing-library/react'
import EventRect from './EventRect'

test('renders EventRect component correctly', () => {
	const zone = {
		left: 10,
		top: 20,
		width: 100,
		height: 50,
	}

	const { container } = render(<EventRect zone={zone} />)

	const rectElement = container.querySelector(
		'[style="top: 20px; left: 10px; width: 100px; height: 50px;"]'
	)

	expect(rectElement).toBeInTheDocument()
})
