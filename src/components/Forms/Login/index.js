import React from 'react'
import PropTypes from 'prop-types'
import Input from './../../Input'
import Button from './../../Button'
import * as S from './styles'

const LoginForm = ({ onSubmit, disabled }) => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const attemptLogin = e => {
    e.preventDefault()
    onSubmit({ email, password })
  }

  return (
    <S.FormWrapper onSubmit={attemptLogin}>
      <fieldset>
        <label htmlFor='email'>E-mail</label>
        <Input
          type='text'
          value={email}
          id='email'
          onChange={e => setEmail(e.target.value)}
          name='email'
          required
        />
        <label htmlFor='password'>Password</label>
        <Input
          type='password'
          value={password}
          id='password'
          onChange={e => setPassword(e.target.value)}
          name='password'
          required
        />
        <Button disabled={disabled}>{disabled ? 'Loading...' : 'Login'}</Button>
      </fieldset>
    </S.FormWrapper>
  )
}

LoginForm.propTypes = {
  disabled: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired
}

export default LoginForm
