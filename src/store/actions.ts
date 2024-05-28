import { Event } from './types'

export const FETCH_EVENTS = 'FETCH_EVENTS'
export const SET_EVENTS = 'SET_EVENTS'
export const SEEK_TO_TIMESTAMP = 'SEEK_TO_TIMESTAMP'

export const fetchEvents = () => ({
	type: FETCH_EVENTS,
})

export const setEvents = (events: Event[]) => ({
	type: SET_EVENTS,
	payload: events,
})

export const seekToTimestamp = (timestamp: number) => ({
	type: SEEK_TO_TIMESTAMP,
	payload: timestamp,
})
