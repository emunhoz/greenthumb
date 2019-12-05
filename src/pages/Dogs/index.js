import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setPets } from '../../store/ducks/features'

import Layout from '../../components/Layout'
import StepMessage from '../../components/StepMessage'
import Card from '../../components/Card'
import BtnLink from '../../components/BtnLink'
import { ReactComponent as Pet } from '../../images/icons/coral/pet.svg'
import { ReactComponent as NoAnswer } from '../../images/icons/coral/no-answer.svg'
import Dog from '../../images/illustrations/dog.png'
import * as S from './styles'

import { FadeInUp } from 'animate-css-styled-components'

const DogPage = ({ pets, setPets }) => (
  <Layout>
    <S.Main>
      <StepMessage img={Dog}>
        Do you have pets? Do they <strong>chew</strong> plants?
      </StepMessage>
      <S.Wrapper>
        <FadeInUp duration='0.8s' delay='2s' style={{ margin: 0 }}>
          <S.WarningMessage>
            We are asking because some plants can be <strong>toxic</strong> for
            your buddy.
          </S.WarningMessage>
        </FadeInUp>
        <Card duration='.5s' delay='1.2s' icon={Pet} onClick={() => setPets(true)} text='Yes' color='#FD9872' />
        <Card duration='.5s' delay='1.4s' icon={NoAnswer} onClick={() => setPets(false)} text='No/They don`t care' color='#FD9872' />
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

DogPage.propTypes = {
  pets: PropTypes.bool,
  setPets: PropTypes.func
}

const mapDispatchToProps = dispatch => bindActionCreators({ setPets }, dispatch)
const mapStateToProps = ({ features: { pets } }) => ({ pets })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DogPage)
