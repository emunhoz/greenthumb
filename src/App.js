import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import GlobalStyle from './styles/GlobalStyle'
import Routes from './routes'

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Routes />
  </Provider>
)

export default App
