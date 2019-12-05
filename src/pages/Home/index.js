import React from 'react'
import HomeLayout from '../../components/HomeLayout'
import HomeIllustration from '../../images/illustrations/illustration-home.png'
import { FadeInRight } from 'animate-css-styled-components'
import * as S from './styles'

const HomePage = () => (
  <HomeLayout>
    <S.Main>
      <FadeInRight duration='0.5s' delay='.8s' style={{ height: '100%' }}><S.Img src={HomeIllustration} alt='Plants' /></FadeInRight>
    </S.Main>
  </HomeLayout>
)

export default HomePage
