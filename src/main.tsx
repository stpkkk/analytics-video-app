import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './store/reducers'
import rootSaga from './store/sagas'
import App from './App'
import './index.css'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

const container = document.getElementById('root')
if (container) {
	const root = createRoot(container)
	root.render(
		<Provider store={store}>
			<App />
		</Provider>
	)
}
