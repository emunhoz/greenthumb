import styled from 'styled-components'
import media from 'styled-media-query'

export const StepMessage = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`

export const Img = styled.img`
  margin-bottom: 21px;

  ${media.greaterThan('medium')`
    margin-bottom: 30px;
  `}
`

export const Description = styled.p`
  font-weight: 300;
  font-size: 22px;
  line-height: 32px;
  text-align: center;
  color: var(--text);
  margin-bottom: 65px;

  ${media.greaterThan('medium')`
    font-size: 30px;
    line-height: 45px;
  `}
`
