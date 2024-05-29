import { RootState } from '../types'
import { SEEK_TO_TIMESTAMP, SET_EVENTS } from './actions'

const initialState: RootState = {
	events: [],
}

const reducer = (state = initialState, action: any): RootState => {
	switch (action.type) {
		case SET_EVENTS:
			return {
				...state,
				events: action.payload,
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
