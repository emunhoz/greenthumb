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

import { ReactComponent as Pet } from '../../images/icons/coral/pet.svg'
import { ReactComponent as NoAnswer } from '../../images/icons/coral/no-answer.svg'
import Dog from '../../images/illustrations/dog.png'

import { FadeInUp } from 'animate-css-styled-components'

import { Main, WrapperDogs, Navs, WarningMessage } from './styles'

const cards = [
  {
    value: true,
    icon: Pet,
    text: 'Yes'
  },
  {
    value: false,
    icon: NoAnswer,
    text: 'No/They don`t care'
  }
]

const Pets = ({ pets, setFeature, setStep }) => (
  <Main>
    <StepMessage img={Dog}>
      Do you have pets? Do they <strong>chew</strong> plants?
    </StepMessage>
    <WrapperDogs>
      <FadeInUp duration='0.8s' delay='1s' style={{ margin: 0 }}>
        <WarningMessage>
          We are asking because some plants can be <strong>toxic</strong> for
          your buddy.
        </WarningMessage>
      </FadeInUp>
      {cards.map((item, k) => (
        <Card
          key={k}
          className={item.value === pets ? 'active' : null}
          delay={2 * k}
          onClick={() => setFeature({ field: 'pets', value: item.value })}
          icon={item.icon}
          text={item.text}
          color='#FD9872'
        />
      ))}
      <Navs>
        <Button onClick={() => setStep(2)} icon='left' shape='line'>
          previous
        </Button>
        <BtnLink
          to='/plants'
          onClick={e => !pets && e.preventDefault()}
          icon='right'
          shape='line'
        >
          finish
        </BtnLink>
      </Navs>
    </WrapperDogs>
  </Main>
)

Pets.propTypes = {
  pets: PropTypes.bool,
  setFeature: PropTypes.func,
  setStep: PropTypes.func
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setFeature, setStep }, dispatch)
const mapStateToProps = ({ features: { pets } }) => ({ pets })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pets)
