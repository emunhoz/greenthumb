import React from 'react'
import HomeLayout from '../../components/HomeLayout'
import HomeIllustration from '../../images/illustrations/illustration-home.png'
import * as S from './styles'

const HomePage = () => (
  <HomeLayout>
    <S.Main><S.Img src={HomeIllustration} alt='Plants' /></S.Main>
  </HomeLayout>
)

export default HomePage
