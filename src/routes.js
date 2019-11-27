import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import History from './utils/History'
import ErrorBoundary from './utils/ErrorBoundary'
import PrivateRoute from './utils/PrivateRoute'
import HeaderContainer from './containers/Header'
import LoginPage from './pages/Login'
import HomePage from './pages/Home'

const Routes = () => (
  <Router history={History}>
    <HeaderContainer />
    <ErrorBoundary>
      <Switch>
        <Route exact path='/' component={LoginPage} />
        <PrivateRoute path='/home' component={HomePage} />
        <Route path='*' component={() => <h1>Page not found</h1>} />
      </Switch>
    </ErrorBoundary>
  </Router>
)

export default Routes
