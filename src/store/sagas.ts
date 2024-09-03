import { call, put, takeEvery } from 'redux-saga/effects'
import { FETCH_EVENTS, setEvents, setEventsError } from './actions'
import { Event } from '../types'

const API_URL = 'https://5025y.wiremockapi.cloud/json/1'

function* fetchEventsSaga() {
	try {
		const response: Response = yield call(fetch, API_URL)

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`)
		}

		const data: Event[] = yield response.json()
		yield put(setEvents(data))
	} catch (error) {
		// Check if the error is an instance of Error
		if (error instanceof Error) {
			yield put(setEventsError(error.message))
		} else {
			// Handle unknown error types
			yield put(setEventsError('An unknown error occurred.'))
		}
	}
}

function* rootSaga() {
	yield takeEvery(FETCH_EVENTS, fetchEventsSaga)
}

export default rootSaga
