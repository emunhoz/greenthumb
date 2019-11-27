import styled from 'styled-components'

export const LoginSection = styled.section`
  display: flex;
  padding: 25px;
  height: 100vh;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`
export const Box = styled.div`
  max-width: 420px;
  width: 100%;
`

export const TitlePage = styled.h1`
  font-weight: 300;
  margin-bottom: 60px;
`

export const Code = styled.code`
  display: block;
  padding: 20px;
  background: #e4e4e4;
  margin-bottom: 50px;
  border-radius: 3px;
  color: #717171;
  font-family: inherit;
  font-size: 13px;
  div {
    display: flex;
    justify-content: center;
    flex-flow: column;
    line-height: 30px;
  }
`
