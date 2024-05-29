import { call, put, takeEvery } from 'redux-saga/effects'
import { FETCH_EVENTS, setEvents } from './actions'
import { Event } from '../types'

const API_URL = 'https://run.mocky.io/v3/86ba5ad4-c45e-4f3d-9a07-83ce9a345833'

function* fetchEventsSaga() {
	const response: Response = yield call(fetch, API_URL)
	const data: Event[] = yield response.json()
	yield put(setEvents(data))
}

function* rootSaga() {
	yield takeEvery(FETCH_EVENTS, fetchEventsSaga)
}

export default rootSaga
