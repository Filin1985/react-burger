import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './components/app/App'
import '@ya.praktikum/react-developer-burger-ui-components'
import { compose, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from './services/reducers/root-reducer.js'
import thunk from 'redux-thunk'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(applyMiddleware(thunk))

const store = createStore(rootReducer, enhancer)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className='content'>
        <App />
      </div>
    </Provider>
  </React.StrictMode>
)
