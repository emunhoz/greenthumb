import React from 'react'
import PropTypes from 'prop-types'
import LogoGreenThumb from '../../images/logo-greenthumb.svg'
import BtnLink from '../BtnLink'
import * as S from './styles'

const HomeLayout = ({ children }) => (
  <S.HomeLayout id='content'>
    <S.Header>
      <S.Logo src={LogoGreenThumb} alt='Logo' />
      <S.Title>Find your next green friend</S.Title>
      <BtnLink icon='right' to='/sunlight'>start quizz</BtnLink>
    </S.Header>
    {children}
  </S.HomeLayout>
)

HomeLayout.propTypes = {
  children: PropTypes.object
}

export default HomeLayout
