import PropTypes from 'prop-types'
import * as S from './styles'

const Label = props => (
  <S.Label {...props}>{props.name}</S.Label>
)

Label.propTypes = {
  name: PropTypes.string
}

export default Label
