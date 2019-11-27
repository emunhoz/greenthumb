import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import LoginForm from './'

test('allows the user to login successfully', async () => {
  const onSubmit = jest.fn()
  const fakeUserResponse = { token: 'fake_user_token' }
  jest.spyOn(window, 'fetch').mockImplementationOnce(() => {
    return Promise.resolve({
      json: () => Promise.resolve(fakeUserResponse)
    })
  })

  const { getByLabelText, getByText } = render(
    <LoginForm onSubmit={onSubmit} />
  )

  fireEvent.change(getByLabelText('E-mail'), { target: { value: 'chuck' } })
  fireEvent.change(getByLabelText(/password/i), { target: { value: 'norris' } })

  const buttonSubmit = getByText(/login/i)

  fireEvent.click(buttonSubmit)
})
