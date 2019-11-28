import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styles'

const Button = props => (
  <S.Button {...props}>{props.icon ? <S.ArrowIcon /> : null}{props.children}</S.Button>
)

Button.propTypes = {
  icon: PropTypes.func,
  children: PropTypes.string
}

export default Button
