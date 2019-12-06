import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styles'

const Card = ({
  icon: Icon,
  text,
  color,
  onClick,
  className,
  duration,
  delay
}) => (
  <S.Card
    color={color}
    onClick={onClick}
    className={className}
    duration={duration}
    delay={delay}
  >
    <Icon />
    <p>{text}</p>
  </S.Card>
)

Card.propTypes = {
  icon: PropTypes.object,
  text: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  duration: PropTypes.string,
  delay: PropTypes.number,
  onClick: PropTypes.func
}

export default Card
