import React from 'react'
import Layout from '../../components/Layout'
import StepMessage from '../../components/StepMessage'
import Card from '../../components/Card'
import BtnLink from '../../components/BtnLink'
import { ReactComponent as Pet } from '../../images/icons/coral/pet.svg'
import { ReactComponent as NoAnswer } from '../../images/icons/coral/no-answer.svg'
import Dog from '../../images/illustrations/dog.png'
import * as S from './styles'

const WaterPage = () => (
  <Layout>
    <S.Main>
      <StepMessage img={Dog}>
        Do you have pets? Do they <strong>chew</strong> plants?
      </StepMessage>
      <S.Wrapper>
        <S.WarningMessage>
          We are asking because some plants can be <strong>toxic</strong> for
          your buddy.
        </S.WarningMessage>
        <Card icon={Pet} text='Yes' color='#FD9872' />
        <Card icon={NoAnswer} text='No/They don`t care' color='#FD9872' />
        <S.Navs>
          <BtnLink to='/water' icon='left' shape='line'>
            previous
          </BtnLink>
          <BtnLink to='/pick' icon='right' shape='line'>
            finish
          </BtnLink>
        </S.Navs>
      </S.Wrapper>
    </S.Main>
  </Layout>
)

export default WaterPage
