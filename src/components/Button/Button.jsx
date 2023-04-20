import PropTypes from 'prop-types'
import { ArrowRight, ArrowLeft } from 'styled-icons/feather'
import * as S from './styles'

const Button = props => (
  <S.Button {...props}>
    {props.icon === 'left' && (
      <S.Icon>
        <ArrowLeft />
      </S.Icon>
    )}

    {props.children}

    {props.icon === 'right' && (
      <S.Icon>
        <ArrowRight />
      </S.Icon>
    )}
  </S.Button>
)

Button.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.string
}

export default Button
