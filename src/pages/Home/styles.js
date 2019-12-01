import styled from 'styled-components'
import media from 'styled-media-query'

export const Main = styled.main`
  grid-area: main;
  display: flex;
  align-items: center;
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
