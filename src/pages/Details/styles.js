import styled from 'styled-components'
import media from 'styled-media-query'

export const Main = styled.main`
  grid-area: main;
  display: grid;
  grid-template-columns: 1fr;

  ${media.greaterThan('medium')`
    grid-template-columns: 1fr 1fr;
    padding: 61px 0;
  `}
`

export const PlantInfo = styled.div`
  max-width: 380px;
`

export const Title = styled.h2`
  font-size: 50px;
  line-height: 55px;
  color: var(--title-highlighted);

  ${media.greaterThan('medium')`
    font-size: 65px;
    line-height: 79px;
  `}
`

export const Price = styled.div`
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;

  color: #d6d6d6;
`

export const Img = styled.img`
  margin: 0 auto;
  display: block;

  ${media.greaterThan('medium')`
    width: auto;
    margin: 0;
  `}
`

export const List = styled.ul`
  list-style: none;
  margin-bottom: 46px;
`

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  color: #6E6E6E;
  margin-bottom: 17px;
  svg {
    width: 28px;
    height: 28px;
    margin-right: 13px;
  }

  strong {
    margin-right: 5px;
  }
`

export const Contact = styled.div`
  background: #f6f6f6;
  width: 100%;
  height: 512px;
  padding: 30px;

  ${media.greaterThan('medium')`
    width: 381px;
  `}
`

export const TitleForm = styled.h2`
  font-size: 40px;
  line-height: 37px;
  margin-bottom: 16px;
  color: #0c261c;
`

export const Description = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 29px;
  color: #6e6e6e;
  margin-bottom: 30px;
`

export const SuccessMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;

  ${TitleForm} {
    margin-top: 15px;
  }

  ${Description} {
    text-align: center;
    margin-bottom: 36px;
    max-width: 265px;
  }
`
