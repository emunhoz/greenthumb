import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import GlobalStyle from '../src/styles/GlobalStyle'

addDecorator(s => (
  <React.Fragment>
    <GlobalStyle />
    {s()}
  </React.Fragment>
))

function loadStories () {
  const req = require.context('../src', true, /\.storybook\.js$/)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
