import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Layout from '../../components/Layout'

import SunLight from '../../components/Wizard/SunLight'
import WaterStep from '../../components/Wizard/Water'
import Pets from '../../components/Wizard/Pets'

const WizardPage = ({ step = 1 }) => (
  <Layout>
    {step === 1 && <SunLight />}
    {step === 2 && <WaterStep />}
    {step === 3 && <Pets />}
  </Layout>
)

WizardPage.propTypes = {
  step: PropTypes.number
}

const mapStateToProps = ({ wizard: { step } }) => ({ step })

export default connect(mapStateToProps)(WizardPage)
