import styled from 'styled-components'
import { FadeInUp } from 'animate-css-styled-components'

export const ProductCard = styled(FadeInUp)`
  background: var(--white);
  box-shadow: 0px 28px 38px rgba(0, 0, 0, 0.0925754);
  border-radius: 5px;
  padding: 28px;
  max-width: 268px;
  display: flex;
  flex-flow: column;

  animation-duration: .5s;
  animation-delay: ${({ delay }) => `.${delay}s`};
`

export const Title = styled.h3`
  color: var(--primary);
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
`

export const Features = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`

export const Price = styled.span`
  font-weight: 300;
  font-size: 18px;
  line-height: 28px;
  color: var(--text);
`

export const Icons = styled.span`
  display: flex;
  img {
    height: 23px;
    width: 23px;
    margin-right: 5px;
    &:last-child {
      margin-right: 0;
    }
  }
`
