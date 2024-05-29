import { EventList, VideoPlayer } from './components'
import styles from './App.module.css'

function App() {
	return (
		<div className={styles.container}>
			<VideoPlayer />
			<EventList />
		</div>
	)
}

export default App
