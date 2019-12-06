import styled from 'styled-components'
import media from 'styled-media-query'

export const Main = styled.main`
  grid-area: main;
  display: flex;
  align-items: center;

  div {
    height: 100%;
    display: flex;
    align-items: center;
  }
`

export const Img = styled.img`
  width: 100%;
  min-width: 516px;
  position: fixed;

  ${media.greaterThan('medium')`
    width: 100%;
    max-width: 779px;
    position: inherit;
  `}
`

export const Header = styled.aside`
  flex-flow: column;
  display: flex;
  align-items: center;
  grid-area: aside;

  ${media.greaterThan('medium')`
    display: block;
  `}
`

export const Logo = styled.img`
  height: 25px;
  margin-bottom: 45px;

  ${media.greaterThan('medium')`
    width: auto;
    height: auto;
    margin-bottom: 96px;
  `}
`

export const Title = styled.h1`
  font-size: 35px;
  line-height: 43px;
  text-align: center;
  margin-bottom: 35px;

  ${media.greaterThan('medium')`
    font-weight: bold;
    font-size: 66px;
    text-align: left;
    line-height: 80px;
    margin-bottom: 28px;
  `}
`
