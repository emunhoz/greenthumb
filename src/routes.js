import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import History from './utils/History'
import ErrorBoundary from './utils/ErrorBoundary'
import HomePage from './pages/Home'
import PlantsPage from './pages/Plants'
import DetailsPage from './pages/Details'
import WizardPage from './pages/Wizard'

const Routes = () => (
  <Router history={History}>
    <ErrorBoundary>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/wizard' component={WizardPage} />
        <Route path='/plants' component={PlantsPage} />
        <Route path='/:id' component={DetailsPage} />
        <Route path='*' component={() => <h1>Page not found</h1>} />
      </Switch>
    </ErrorBoundary>
  </Router>
)

export default Routes
