import React from 'react'
import LoginFormContainer from '../../containers/LoginForm'
import * as S from './styles'

const LoginPage = () => (
  <S.LoginSection>
    <S.Box>
      <S.TitlePage>Login page</S.TitlePage>
      <S.Code>
        <div>
          <p>E-mail: edermunhozsantos@gmail.com</p>
          <p>Password: mudar123</p>
        </div>
      </S.Code>
      <LoginFormContainer />
    </S.Box>
  </S.LoginSection>
)

export default LoginPage
