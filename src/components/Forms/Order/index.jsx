import PropTypes from 'prop-types'
import * as S from './styles'
import Input from '../../Input'
import Label from '../../Label'
import { Button } from '../../Button'

const OrderForm = ({ onSubmitForm }) => {
  const onSubmit = e => {
    e.preventDefault()
    // onSubmitForm(data)
    console.log('done!')
  }

  return (
    <form onSubmit={e => onSubmit(e)}>
      <Label id='name' name='Name' />
      <Input id='name' name='name' required />

      <Label id='email' name='E-mail' />
      <Input id='email' name='email' required />

      <S.BtnAction>
        <Button type='submit' shape='line'>
          send
        </Button>
      </S.BtnAction>
    </form>
  )
}

OrderForm.propTypes = {
  onSubmitForm: PropTypes.func
}

export default OrderForm
