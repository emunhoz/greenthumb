import Card from '.'
import styled from 'styled-components'

import { ReactComponent as HighSunlight } from '../../images/icons/coral/high-sun.svg'

export default {
  title: 'Card'
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
  <Background><Card icon={HighSunlight} text='High sunlight' color='#FD9872' /></Background>
)
