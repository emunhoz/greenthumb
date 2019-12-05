import React from 'react'
import PropTypes from 'prop-types'
import LogoGreenThumb from '../../images/logo-greenthumb.svg'
import BtnLink from '../BtnLink'
import * as S from './styles'
import { FadeInLeft } from 'animate-css-styled-components'

const HomeLayout = ({ children }) => (
  <S.HomeLayout id='content'>
    <S.Header>
      <FadeInLeft duration='0.5s' delay='.5s'>
        <S.Logo src={LogoGreenThumb} alt='Logo' />
      </FadeInLeft>
      <FadeInLeft duration='0.5s' delay='.8s'>
        <S.Title>Find your next green friend</S.Title>
      </FadeInLeft>
      <FadeInLeft duration='0.5s' delay='1s'>
        <BtnLink icon='right' to='/sunlight'>start quizz</BtnLink>
      </FadeInLeft>
    </S.Header>
    {children}
  </S.HomeLayout>
)

HomeLayout.propTypes = {
  children: PropTypes.object
}

export default HomeLayout
