import React from 'react'
import PropTypes from 'prop-types'
import useForm from 'react-hook-form'
import * as S from './styles'
import { RHFInput } from 'react-hook-form-input'
import { ErrorWarning } from 'styled-icons/remix-fill/ErrorWarning'
import Input from '../../Input'
import Label from '../../Label'
import { Button } from '../../Button'

const OrderForm = ({ onSubmitForm }) => {
  const { register, handleSubmit, setValue, errors } = useForm({
    mode: 'onChange'
  })
  const emailPattern = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i

  const onSubmit = data => {
    onSubmitForm(data)
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Label id='name' name='Name' className={errors.name ? 'error' : null} />
      <RHFInput
        as={<Input id='name' name='name' />}
        name='name'
        className={errors.name ? 'error' : null}
        placeholder='Crazy Plant Person'
        setValue={setValue}
        register={register({ required: true, minLength: 2 })}
      />
      {errors.name && (
        <p>
          <ErrorWarning /> Please tell us your name :)
        </p>
      )}

      <Label
        id='email'
        name='E-mail'
        className={errors.email ? 'error' : null}
      />
      <RHFInput
        as={<Input id='email' name='email' />}
        placeholder='plantperson@email.com'
        name='email'
        setValue={setValue}
        className={errors.email ? 'error' : null}
        register={register({ required: true, pattern: emailPattern })}
      />
      {errors.email && (
        <p>
          <ErrorWarning /> Please provide a valid e-mail
        </p>
      )}

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
