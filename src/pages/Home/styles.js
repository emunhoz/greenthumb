import styled from 'styled-components'
import media from 'styled-media-query'

export const Main = styled.main`
  grid-area: main;
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
