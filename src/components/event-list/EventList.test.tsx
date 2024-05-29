import { render, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import EventList from './EventList'

const mockStore = configureStore([])

test('renders EventList component correctly', () => {
	const initialState = {
		events: [{ timestamp: 1 }, { timestamp: 2 }, { timestamp: 3 }],
	}
	const store = mockStore(initialState)

	const { queryByText } = render(
		<Provider store={store}>
			<EventList />
		</Provider>
	)

	expect(queryByText(/00:01:000/i)).toBeInTheDocument()
	expect(queryByText(/00:02:000/i)).toBeInTheDocument()
	expect(queryByText(/00:03:000/i)).toBeInTheDocument()
})

test('dispatches seekToTimestamp action when list item is clicked', () => {
	const initialState = { events: [{ timestamp: 1 }] }
	const store = mockStore(initialState)
	const mockDispatch = jest.spyOn(store, 'dispatch')

	const { queryByText } = render(
		<Provider store={store}>
			<EventList />
		</Provider>
	)

	const listItem = queryByText(/00:01:000/i)
	if (listItem) {
		fireEvent.click(listItem)
		expect(mockDispatch).toHaveBeenCalledWith({
			type: 'SEEK_TO_TIMESTAMP',
			payload: 1,
		})
	} else {
		throw new Error('List item not found')
	}
})
