import { EventList, VideoPlayer, Footer } from './components'
import styles from './App.module.css'

function App() {
	return (
		<>
			<div className={styles.container}>
				<VideoPlayer />
				<EventList />
			</div>
			<Footer />
		</>
	)
}

export default App
