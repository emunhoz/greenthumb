import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styles'

const StepMessage = ({ img, children }) => (
  <S.StepMessage>
    <S.Img src={img} alt='' />
    <S.Description>{children}</S.Description>
  </S.StepMessage>
)

StepMessage.propTypes = {
  img: PropTypes.string,
  children: PropTypes.array
}

export default StepMessage
