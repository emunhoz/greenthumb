import styled from 'styled-components'
import media from 'styled-media-query'
import {
  FadeIn,
  FadeInLeft,
  FadeInRight,
  FadeInUp
} from 'animate-css-styled-components'

export const Main = styled.main`
  grid-area: main;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;

  ${media.greaterThan('medium')`
    grid-template-columns: 1fr 1fr;
    padding: 61px 0;
  `}
`

export const PlantInfo = styled(FadeInLeft)`
  animation-duration: 0.5s;
  animation-delay: 0.2s;

  ${media.greaterThan('medium')`
    max-width: 380px;
  `}
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
  width: 100%;
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
  color: #6e6e6e;
  margin-bottom: 17px;
  img {
    width: 28px;
    height: 28px;
    margin-right: 13px;
  }

  strong {
    margin-right: 5px;
  }
`

export const Contact = styled(FadeInRight)`
  background: #f6f6f6;
  width: 100%;
  height: 512px;
  padding: 30px;

  animation-duration: 0.5s;
  animation-delay: 0.2s;

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

export const SuccessMessage = styled(FadeIn)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;

  animation-duration: 0.5s;
  animation-delay: 0.2s;

  ${TitleForm} {
    margin-top: 15px;
  }

  ${Description} {
    text-align: center;
    margin-bottom: 36px;
    max-width: 265px;
  }
`

export const ErrorMessage = styled(FadeInUp)`
  background: #ff6c6c;
  align-items: center;
  padding: 20px;
  color: #fff;
  margin-bottom: 20px;
  font-weight: 600;
  display: flex;
  align-items: center;

  animation-duration: 0.5s;
  animation-delay: 0.2s;

  img {
    height: 36px;
    margin-right: 20px;
  }
`
