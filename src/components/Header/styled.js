import styled from 'styled-components'
import media from 'styled-media-query'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: header;

  ${media.greaterThan('medium')`
    text-align: center;
    padding: 61px 0;
    display: block;
  `}
`

export const Logo = styled.img`
  width: 166px;
  height: 20px;
  margin: 25px 0;

  ${media.greaterThan('medium')`
    width: auto;
    height: auto;
    margin: 0;
  `}
`
