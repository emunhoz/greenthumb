import styled from 'styled-components'
import media from 'styled-media-query'

export const Main = styled.main`
  grid-area: main;

  ${media.greaterThan('medium')`
    padding: 61px 0;
  `}
`

export const WarningMessage = styled.p`
  text-align: center;
  font-weight: 300;
  font-size: 14px;
  line-height: 39px;
  color: var(--text);
  margin-bottom: 47px;
  width: 100%;

  ${media.greaterThan('medium')`
    margin-bottom: 39px;
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
    justify-content: center;

    div {
      &:first-of-type {
        margin-right: 30px;
      }
    }
  `}
`

export const Navs = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-top: 37px;

  a {
    margin-bottom: 31px;

    &:first-child {
      background: var(--primary);
      color: var(--white);
      svg {
        color: var(--white);
      }
    }
  }

  ${media.greaterThan('medium')`
    margin-top: 47px;
    justify-content: space-between;
    flex-flow: wrap;
    width: 100%;

    a {
      &:first-child {
        background: inherit;
        color: var(--primary);
        svg {
          color: var(--primary);
        }
      }
    }
  `}
`