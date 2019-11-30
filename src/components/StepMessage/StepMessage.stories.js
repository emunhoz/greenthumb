import React from 'react'
import StepMessage from '.'
import styled from 'styled-components'

import Sun from '../../images/illustrations/sun.png'

export default {
  title: 'StepMessage'
}

const Background = styled.form`
  background: rgb(246, 246, 246);
  height: 100vh;
  padding: 30px;

  button {
    margin-top: 30px;
  }
`

export const primary = () => (
  <Background><StepMessage img={Sun}><p>First, set the amount of <strong>sunlight</strong> your plant will get.</p></StepMessage></Background>
)
