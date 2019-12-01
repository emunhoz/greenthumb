import React from 'react'
import * as S from './styled'
import LogoGreenThumbDesktop from '../../images/logo-desktop.svg'
import LogoGreenThumb from '../../images/logo-greenthumb.svg'

const Header = () => (
  <S.Header>
    <picture>
      <source srcSet={LogoGreenThumbDesktop} media='(min-width: 768px)' />
      <S.Logo src={LogoGreenThumb} alt='Logo' />
    </picture>
  </S.Header>
)

export default Header
