import styled from 'styled-components'

export const Header = styled.header`
  height: 54px;
  align-items: center;
  justify-content: space-between;
  display: flex;
  color: rgb(255, 255, 255);
  margin-bottom: 30px;
  background: #3e454c;
  padding: 0px 15px;
`

export const Logo = styled.img``

export const LogoOut = styled.span`
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
`
