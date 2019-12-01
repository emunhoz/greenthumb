import styled from 'styled-components'
import media from 'styled-media-query'

export const HomeLayout = styled.div`
  display: grid;
  grid-template-areas:
      "aside"
      "main";
  grid-template-rows: 280px 1fr;
  min-height: 100vh;
  background: var(--background);
  padding: 20px;

  ${media.greaterThan('medium')`
    grid-template-areas:
      "aside main";
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    padding: 5% 10%;
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
