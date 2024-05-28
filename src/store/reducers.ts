import { SET_EVENTS } from './actions'
import { RootState } from './types'

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

		default:
			return state
	}
}

export default reducer
