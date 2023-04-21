import PropTypes from 'prop-types'
import * as S from './styles'

const Button = props => (
  <S.Button {...props}>
    {props.icon === 'left' && (
      <S.Icon>
        {`<`}
      </S.Icon>
    )}

    {props.children}

    {props.icon === 'right' && (
      <S.Icon>
        {`>`}
      </S.Icon>
    )}
  </S.Button>
)

Button.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.string
}

export default Button
