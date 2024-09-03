export interface Zone {
	left: number
	top: number
	width: number
	height: number
}

export interface Event {
	timestamp: number
	duration: number
	zone: Zone
}

export interface RootState {
	events: Event[]
	error: string
	loading: boolean
}
