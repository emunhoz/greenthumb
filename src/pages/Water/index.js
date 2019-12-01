import React from 'react'
import Layout from '../../components/Layout'
import StepMessage from '../../components/StepMessage'
import Card from '../../components/Card'
import BtnLink from '../../components/BtnLink'
import { ReactComponent as OneDrops } from '../../images/icons/green/one-drop.svg'
import { ReactComponent as TwoDrops } from '../../images/icons/green/two-drops.svg'
import { ReactComponent as ThreeDrops } from '../../images/icons/green/three-drops.svg'
import Water from '../../images/illustrations/wateringcan.png'
import * as S from './styles'

const WaterPage = () => (
  <Layout>
    <S.Main>
      <StepMessage img={Water}>How often do you want to <strong>water</strong> your plant?</StepMessage>
      <S.Wrapper>
        <Card icon={OneDrops} text='Rarely' color='var(--primary-light)' />
        <Card icon={TwoDrops} text='Regularly' color='var(--primary-light)' />
        <Card icon={ThreeDrops} text='Daily' color='var(--primary-light)' />
        <S.Navs>
          <BtnLink to='/sunlight' icon='left' shape='line'>previous</BtnLink>
          <BtnLink to='/dogs' icon='right' shape='line'>next</BtnLink>
        </S.Navs>
      </S.Wrapper>
    </S.Main>
  </Layout>
)

export default WaterPage
