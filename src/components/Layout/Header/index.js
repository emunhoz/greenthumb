import React from 'react'
import PropTypes from 'prop-types'
import logoImg from './logo.svg'
import * as S from './styles'

const Header = ({ onClick }) => (
  <S.Header>
    <S.Logo src={logoImg} alt='logo' />
    <S.LogoOut onClick={onClick}>Logout</S.LogoOut>
  </S.Header>
)

Header.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Header
