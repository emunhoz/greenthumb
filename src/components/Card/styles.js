import styled from 'styled-components'
import media from 'styled-media-query'
import { FadeInUp } from 'animate-css-styled-components'

export const Card = styled(FadeInUp)`
  background: var(--white);
  box-shadow: 0px 20px 34px rgba(0, 0, 0, 0.0758577);
  border-radius: 5px;
  height: 74px;
  font-weight: 300;
  font-size: 16px;
  line-height: 34px;
  padding: 20px;
  color: var(--gray-light);
  width: 100%;
  margin-bottom: 20px;
  transition: 0.2s;

  display: inline-flex;
  align-items: center;

  animation-duration: ${({ duration }) => duration};
  animation-delay: ${({ delay }) => delay};

  svg {
    width: 42px;
    height: 42px;
    margin-right: 20px;
  }

  &:hover {
    cursor: pointer;
    background: ${({ color }) => color};
    font-weight: 600;
    color: var(--white);
    transform: scale(1.05);
    box-shadow: 0px 5px 6px rgba(0,0,0,0.1.5);

    svg {
      * {
        fill: var(--white);
      }
    }
  }


  ${media.greaterThan('medium')`
    max-width: 215px;
    width: 100%;
    height: 190px;
    flex-flow: column;
    padding: 29px 0;
    color: var(--text);

    svg {
      width: 100%;
      height: 68px;
      margin-bottom: 22px;
      margin-right: 0;
    }
  `}
`
