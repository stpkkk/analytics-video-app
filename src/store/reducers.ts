import { Event, RootState } from '../types'
import { SEEK_TO_TIMESTAMP, SET_EVENTS, SET_EVENTS_ERROR } from './actions'

export type Action =
	| { type: typeof SET_EVENTS; payload: Event[] }
	| { type: typeof SET_EVENTS_ERROR; payload: string }
	| { type: typeof SEEK_TO_TIMESTAMP; payload: number }

const initialState: RootState = {
	events: [],
	error: '',
	loading: true,
}

const reducer = (state = initialState, action: Action): RootState => {
	switch (action.type) {
		case SET_EVENTS:
			return {
				...state,
				events: action.payload,
				loading: false,
			}

		case SET_EVENTS_ERROR:
			return {
				...state,
				error: action.payload,
			}

		case SEEK_TO_TIMESTAMP:
			{
				const videoElement = document.querySelector('video')
				if (videoElement) {
					videoElement.currentTime = action.payload
				}
			}
			return state

		default:
			return state
	}
}

export default reducer
