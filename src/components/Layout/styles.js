import styled from 'styled-components'
import media from 'styled-media-query'

export const Layout = styled.div`
  display: grid;
  grid-template-areas:
      "header"
      "main";
  grid-template-columns: 1fr;
  grid-template-rows: 80px 1fr;
  min-height: 100vh;

  ${media.greaterThan('medium')`
    grid-template-areas:
      "header main";
    grid-template-columns: 220px 1fr;
    grid-template-rows: 1fr;
  `}
  grid-area: main;
  background: ${({ color }) => color};
  padding: 0 28px;

  ${media.greaterThan('medium')`
    padding: 0;
  `}
`
