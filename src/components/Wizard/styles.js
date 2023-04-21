import styled from 'styled-components'
import media from 'styled-media-query'

export const Main = styled.main`
  grid-area: main;

  ${media.greaterThan('medium')`
    padding: 61px 0;
  `}
`

export const Img = styled.img`
  width: 100%;
  min-width: 516px;
  position: fixed;
  bottom: 0;
  left: -50px;
  top: 35%;

  ${media.greaterThan('medium')`
    width: 100%;
    max-width: 779px;
    position: inherit;
  `}
`

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;

  ${media.greaterThan('medium')`
    max-width: 705px;
    margin: 0 auto;
    display: flex;
    flex-flow: wrap;
    align-items: center;
    justify-content: space-between;
  `}
`

export const Navs = styled.div`
  display: grid;
  grid-gap: 2.5em;
  justify-content: center;
  margin-top: 37px;

  ${media.greaterThan('medium')`
    display: flex;
    justify-content: space-between;
    width: 100%;
  `}
`

export const WarningMessage = styled.p`
  font-size: 14px;
  line-height: 25px;
  text-align: center;
  font-weight: 300;
  color: var(--text);
  margin-bottom: 47px;
  width: 100%;

  ${media.greaterThan('medium')`
    line-height: 39px;
    margin-bottom: 39px;
  `}
`

export const WrapperDogs = styled.div`
  display: flex;
  flex-flow: column;

  ${media.greaterThan('medium')`
    max-width: 460px;
    margin: 0 auto;
    display: flex;
    flex-flow: wrap;
    align-items: center;
    justify-content: space-between;
  `}
`
