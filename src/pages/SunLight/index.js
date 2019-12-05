import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Layout from '../../components/Layout'
import StepMessage from '../../components/StepMessage'
import Card from '../../components/Card'
import BtnLink from '../../components/BtnLink'
// import Button from '../../components/Button'
import { ReactComponent as HighSunlight } from '../../images/icons/coral/high-sun.svg'
import { ReactComponent as LowSunlight } from '../../images/icons/coral/low-sun.svg'
import { ReactComponent as NoAnswer } from '../../images/icons/coral/no-answer.svg'
import Sun from '../../images/illustrations/sun.png'

import { setSun } from '../../store/ducks/features'

import * as S from './styles'

const SunLightPage = ({ sun, setSun }) => {
  return (
    <Layout>
      <S.Main>
        <StepMessage img={Sun}>First, set the amount of <strong>sunlight</strong> your plant will get.</StepMessage>
        <S.Wrapper>
          <Card id='high' duration='.5s' delay='1.6s' onClick={() => setSun('high')} icon={HighSunlight} text='High sunlight' color='#FD9872' />
          <Card id='low' duration='.5s' delay='1.8s' onClick={() => setSun('low')} icon={LowSunlight} text='Low sunlight' color='#FD9872' />
          <Card id='no' duration='.5s' delay='2s' onClick={() => setSun('no')} icon={NoAnswer} text='No sunlight' color='#FD9872' />
          <S.Navs>
            <BtnLink to='/' icon='left' shape='line'>home</BtnLink>
            {/* <BtnLink to='/water' icon='right' shape='line'>next</BtnLink> */}
            <BtnLink to='/water' disabled={!sun} onClick={e => !sun && e.preventDefault()} icon='right' shape='line'>next</BtnLink>
          </S.Navs>
        </S.Wrapper>
      </S.Main>
    </Layout>
  )
}

SunLightPage.propTypes = {
  sun: PropTypes.string,
  setSun: PropTypes.func
}

const mapDispatchToProps = dispatch => bindActionCreators({ setSun }, dispatch)
const mapStateToProps = ({ features: { sun } }) => ({ sun })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SunLightPage)
