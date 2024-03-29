import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

serviceWorker.register()
