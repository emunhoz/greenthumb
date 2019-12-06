import React from 'react'
import PropTypes from 'prop-types'
import { ArrowRight, ArrowLeft } from 'styled-icons/feather'
import * as S from './styles'

const Button = props => (
  <S.Button {...props}>
    {props.icon === 'right' ? <S.Icon><ArrowRight /></S.Icon> : null}
    {props.icon === 'left' ? <S.Icon><ArrowLeft /></S.Icon> : null}
    {props.children}
  </S.Button>
)

Button.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.string
}

export default Button
