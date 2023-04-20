import PropTypes from 'prop-types'
import * as S from './styles'

const Card = ({
  icon,
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
    <img src={icon} alt={text} width={78} height={70} />
    <p>{text}</p>
  </S.Card>
)

Card.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  duration: PropTypes.string,
  delay: PropTypes.number,
  onClick: PropTypes.func
}

export default Card
