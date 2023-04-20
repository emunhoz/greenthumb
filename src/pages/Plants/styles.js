import styled from 'styled-components'
import media from 'styled-media-query'

export const Main = styled.main`
  grid-area: main;

  ${media.greaterThan('medium')`
    padding: 61px 0;
  `}
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  margin-bottom: 28px;
  ${media.greaterThan('medium')`
    margin-bottom: 78px;
  `}

  img {
    max-height: 72px;
    max-width: 146px;
    margin-bottom: 29px;
    ${media.greaterThan('medium')`
      min-width: 226px;
      min-height: 112px;
      margin-bottom: 48px;
  `}
  }
`

export const Title = styled.h2`
  font-size: 40px;
  line-height: 49px;
  font-weight: bold;
  text-align: center;
  color: var(--title-highlighted);

  ${media.greaterThan('medium')`
    font-size: 65px;
    line-height: 79px;
  `}
`

export const WrapperCards = styled.div`
  display: flex;
  overflow: auto;
  max-width: 100vw;
  position: absolute;
  left: 28px;
  right: 28px;
  padding: 60px 20px;

  > div {
    min-width: 268px;
    // margin-right: 30px;
    &:last-child {
      margin-right: 0;
    }
  }

  ${media.greaterThan('medium')`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(3, 268px);
    grid-gap: 50px 30px;
    margin: 0 auto;
    max-height: 100%;
    position: inherit;
  `}
`
