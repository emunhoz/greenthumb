import React from 'react'
import * as S from './styled'
import LogoGreenThumbDesktop from '../../images/logo-desktop.svg'
import LogoGreenThumb from '../../images/logo-greenthumb.svg'
import { Link } from 'react-router-dom'

const Header = () => (
  <S.Header>
    <Link to='/'>
      <picture>
        <source srcSet={LogoGreenThumbDesktop} media='(min-width: 768px)' />
        <S.Logo src={LogoGreenThumb} alt='Logo' />
      </picture>
    </Link>
  </S.Header>
)

export default Header
