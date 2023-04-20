import PropTypes from 'prop-types'
import * as S from './styles'

const HomeLayout = ({ children }) => (
  <S.HomeLayout id='content'>{children}</S.HomeLayout>
)

HomeLayout.propTypes = {
  children: PropTypes.array
}

export default HomeLayout
