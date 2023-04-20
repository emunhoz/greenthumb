import Input from '.'
import Label from '../Label'
import styled from 'styled-components'

const Background = styled.form`
  background: rgb(246, 246, 246);
  height: 100vh;
  padding: 30px;

  button {
    margin-top: 30px;
  }
`

export default {
  title: 'Input'
}

export const normal = () => (
  <Background>
    <Label name='Example' />
    <Input label='Label' id='label-example' placeholder='Placeholder' />
  </Background>
)
