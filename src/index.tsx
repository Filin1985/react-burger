import React from 'react'
import { HashRouter as Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './components/app/App'
import '@ya.praktikum/react-developer-burger-ui-components'
import { Provider } from 'react-redux'
import { store } from './services/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Route>
    <React.StrictMode>
      <Provider store={store}>
        <div className='content'>
          <App />
        </div>
      </Provider>
    </React.StrictMode>
  </Route>
)
