import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setWater } from '../../store/ducks/features'

import Layout from '../../components/Layout'
import StepMessage from '../../components/StepMessage'
import Card from '../../components/Card'
import BtnLink from '../../components/BtnLink'
import { ReactComponent as OneDrops } from '../../images/icons/green/one-drop.svg'
import { ReactComponent as TwoDrops } from '../../images/icons/green/two-drops.svg'
import { ReactComponent as ThreeDrops } from '../../images/icons/green/three-drops.svg'
import Water from '../../images/illustrations/wateringcan.png'
import * as S from './styles'

const WaterPage = ({ water, setWater }) => (
  <Layout>
    <S.Main>
      <StepMessage img={Water}>How often do you want to <strong>water</strong> your plant?</StepMessage>
      <S.Wrapper>
        <Card duration='.5s' delay='1.2s' icon={OneDrops} onClick={() => setWater('rarely')} text='Rarely' color='var(--primary-light)' />
        <Card duration='.5s' delay='1.4s' icon={TwoDrops} onClick={() => setWater('regularly')} text='Regularly' color='var(--primary-light)' />
        <Card duration='.5s' delay='1.6s' icon={ThreeDrops} onClick={() => setWater('daily')} text='Daily' color='var(--primary-light)' />
        <S.Navs>
          <BtnLink to='/sunlight' icon='left' shape='line'>previous</BtnLink>
          <BtnLink to='/dogs' icon='right' shape='line'>next</BtnLink>
        </S.Navs>
      </S.Wrapper>
    </S.Main>
  </Layout>
)

WaterPage.propTypes = {
  water: PropTypes.string,
  setWater: PropTypes.func
}

const mapDispatchToProps = dispatch => bindActionCreators({ setWater }, dispatch)
const mapStateToProps = ({ features: { water } }) => ({ water })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WaterPage)
