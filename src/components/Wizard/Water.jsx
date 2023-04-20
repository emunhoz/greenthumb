import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setFeature } from '../../store/ducks/features'
import { setStep } from '../../store/ducks/wizard'

import StepMessage from '../StepMessage'
import Card from '../Card'
import OneDrops from '../../images/icons/green/one-drop.svg'
import TwoDrops from '../../images/icons/green/two-drops.svg'
import ThreeDrops from '../../images/icons/green/three-drops.svg'
import Water from '../../images/illustrations/wateringcan.png'

import { Button } from '../Button'

import { Main, Wrapper, Navs } from './styles'

const cards = [
  {
    value: 'rarely',
    icon: OneDrops,
    text: 'Rarely'
  },
  {
    value: 'regularly',
    icon: TwoDrops,
    text: 'Regularly'
  },
  {
    value: 'daily',
    icon: ThreeDrops,
    text: 'Daily'
  }
]

const WaterStep = ({ water, setFeature, setStep }) => (
  <Main>
    <StepMessage img={Water}>
      How often do you want to <strong>water</strong> your plant?
    </StepMessage>
    <Wrapper>
      {cards.map((item, k) => (
        <Card
          key={k}
          className={item.value === water ? 'active' : null}
          delay={2 * k}
          onClick={() => setFeature({ field: 'water', value: item.value })}
          icon={item.icon}
          text={item.text}
          color='var(--primary-light)'
        />
      ))}
      <Navs>
        <Button onClick={() => setStep(1)} icon='left' shape='line'>
          previous
        </Button>
        <Button
          disabled={!water}
          onClick={() => setStep(3)}
          icon='right'
          shape='line'
        >
          next
        </Button>
      </Navs>
    </Wrapper>
  </Main>
)

WaterStep.propTypes = {
  water: PropTypes.string,
  setFeature: PropTypes.func,
  setStep: PropTypes.func
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setFeature, setStep }, dispatch)
const mapStateToProps = ({ features: { water } }) => ({ water })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WaterStep)
