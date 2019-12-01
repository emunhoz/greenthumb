import React from 'react'
import PropTypes from 'prop-types'
import Header from '../Header'
import * as S from './styles'

const Layout = ({ children, color = 'var(--background)' }) => (
  <S.Layout id='content' color={color}>
    <Header />
    {children}
  </S.Layout>
)

Layout.propTypes = {
  children: PropTypes.object,
  color: PropTypes.string
}

export default Layout
