import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styles'
import { FadeInUp } from 'animate-css-styled-components'

const StepMessage = ({ img, children }) => (
  <S.StepMessage>
    <FadeInUp duration='0.5s' delay='0.2s'>
      <S.Img src={img} alt='' />
    </FadeInUp>
    <FadeInUp duration='0.5s' delay='0.5s'>
      <S.Description>{children}</S.Description>
    </FadeInUp>
  </S.StepMessage>
)

StepMessage.propTypes = {
  img: PropTypes.string,
  children: PropTypes.array
}

export default StepMessage
