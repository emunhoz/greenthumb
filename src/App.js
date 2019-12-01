import React from 'react'
import { Provider } from 'react-redux'
import { store, persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import GlobalStyle from './styles/GlobalStyle'
import Routes from './routes'

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GlobalStyle />
      <Routes />
    </PersistGate>
  </Provider>
)

export default App
