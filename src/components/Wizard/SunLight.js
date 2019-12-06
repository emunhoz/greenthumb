import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { setFeature } from '../../store/ducks/features'
import { setStep } from '../../store/ducks/wizard'

import StepMessage from '../StepMessage'
import Card from '../Card'
import BtnLink from '../BtnLink'
import Button from '../Button'

import { ReactComponent as HighSunlight } from '../../images/icons/coral/high-sun.svg'
import { ReactComponent as LowSunlight } from '../../images/icons/coral/low-sun.svg'
import { ReactComponent as NoAnswer } from '../../images/icons/coral/no-answer.svg'
import Sun from '../../images/illustrations/sun.png'

import { Main, Wrapper, Navs } from './styles'

const cards = [
  {
    value: 'high',
    icon: HighSunlight,
    text: 'High sunlight'
  },
  {
    value: 'low',
    icon: LowSunlight,
    text: 'Low sunlight'
  },
  {
    value: 'no',
    icon: NoAnswer,
    text: 'No sunlight'
  }
]

const SunLight = ({ sun, setFeature, setStep }) => (
  <Main>
    <StepMessage img={Sun}>
      First, set the amount of <strong>sunlight</strong> your plant will get.
    </StepMessage>
    <Wrapper>
      {cards.map((item, k) => (
        <Card
          key={k}
          className={item.value === sun ? 'active' : null}
          delay={2 * k}
          onClick={() => setFeature({ field: 'sun', value: item.value })}
          icon={item.icon}
          text={item.text}
          color='#FD9872'
        />
      ))}
      <Navs>
        <BtnLink to='/' icon='left' shape='line' onClick={() => setStep(1)}>
          home
        </BtnLink>
        <Button
          disabled={!sun}
          onClick={() => setStep(2)}
          icon='right'
          shape='line'
        >
          next
        </Button>
      </Navs>
    </Wrapper>
  </Main>
)

SunLight.propTypes = {
  sun: PropTypes.string,
  setFeature: PropTypes.func,
  setStep: PropTypes.func
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setFeature, setStep }, dispatch)
const mapStateToProps = ({ features: { sun } }) => ({ sun })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SunLight)
