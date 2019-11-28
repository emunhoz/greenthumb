import React from 'react'
import Input from '.'
import useForm from 'react-hook-form'
import { RHFInput } from 'react-hook-form-input'
import { ErrorWarning } from 'styled-icons/remix-fill/ErrorWarning'
import Label from '../Label'
import Button from '../Button'
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

export const formValidate = () => {
  const { register, handleSubmit, setValue, errors } = useForm()

  const onSubmit = data => {
    console.log(data)
  }

  const emailPattern = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i

  return (
    <Background onSubmit={handleSubmit(onSubmit)}>
      <Label name='E-mail' className={errors.email ? 'error' : null} />
      <RHFInput
        as={<Input />}
        name='email'
        setValue={setValue}
        className={errors.email ? 'error' : null}
        register={register({ required: true, pattern: emailPattern })}
      />
      {errors.email && <p><ErrorWarning /> Please provide a valid e-mail</p>}

      <Button type='submit'>Submit</Button>
    </Background>
  )
}
