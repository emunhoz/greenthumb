import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import History from './utils/History'
import ErrorBoundary from './utils/ErrorBoundary'
import HomePage from './pages/Home'
import SunLightPage from './pages/SunLight'
import WaterPage from './pages/Water'
import DogPage from './pages/Dogs'

const Routes = () => (
  <Router history={History}>
    <ErrorBoundary>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/sunlight' component={SunLightPage} />
        <Route exact path='/water' component={WaterPage} />
        <Route exact path='/dogs' component={DogPage} />
        <Route path='*' component={() => <h1>Page not found</h1>} />
      </Switch>
    </ErrorBoundary>
  </Router>
)

export default Routes
