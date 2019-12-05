import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styles'

const Card = ({ icon: Icon, text, color, onClick, id, duration, delay }) => (
  <S.Card color={color} onClick={onClick} id={id} duration={duration} delay={delay}>
    <Icon />
    <p>{text}</p>
  </S.Card>
)

Card.propTypes = {
  icon: PropTypes.object,
  text: PropTypes.string,
  id: PropTypes.string,
  color: PropTypes.string,
  duration: PropTypes.string,
  delay: PropTypes.string,
  onClick: PropTypes.func
}

export default Card
