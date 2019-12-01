import React from 'react'
import Layout from '../../components/Layout'
import StepMessage from '../../components/StepMessage'
import Card from '../../components/Card'
import BtnLink from '../../components/BtnLink'
import { ReactComponent as HighSunlight } from '../../images/icons/coral/high-sun.svg'
import { ReactComponent as LowSunlight } from '../../images/icons/coral/low-sun.svg'
import { ReactComponent as NoAnswer } from '../../images/icons/coral/no-answer.svg'
import Sun from '../../images/illustrations/sun.png'
import * as S from './styles'

const SunLightPage = () => (
  <Layout>
    <S.Main>
      <StepMessage img={Sun}>First, set the amount of <strong>sunlight</strong> your plant will get.</StepMessage>
      <S.Wrapper>
        <Card icon={HighSunlight} text='High sunlight' color='#FD9872' />
        <Card icon={LowSunlight} text='Low sunlight' color='#FD9872' />
        <Card icon={NoAnswer} text='No sunlight' color='#FD9872' />
        <S.Navs>
          <BtnLink to='/' icon='left' shape='line'>home</BtnLink>
          <BtnLink to='/water' icon='right' shape='line'>next</BtnLink>
        </S.Navs>
      </S.Wrapper>
    </S.Main>
  </Layout>
)

export default SunLightPage
