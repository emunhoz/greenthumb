import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { Provider } from 'react-redux'
import { store, persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import GlobalStyle from './styles/GlobalStyle'
import Routes from './routes'

const App = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyle />
        <Routes />
      </PersistGate>
    </Provider>
  </ThemeProvider>
)

export default App
