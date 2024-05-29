import { EventList, VideoPlayer, Footer } from './components'
import styles from './App.module.css'

function App() {
	return (
		<>
			<main className={styles.container}>
				<VideoPlayer />
				<EventList />
			</main>
			<Footer />
		</>
	)
}

export default App
