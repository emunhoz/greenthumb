import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styles'

const Card = ({ icon: Icon, text, color }) => (
  <S.Card color={color}>
    <Icon />
    <p>{text}</p>
  </S.Card>
)

Card.propTypes = {
  icon: PropTypes.object,
  text: PropTypes.string,
  color: PropTypes.string
}

export default Card
