import styled from 'styled-components'
import media from 'styled-media-query'

export const Card = styled.div`
  background: var(--white);
  box-shadow: 0px 20px 34px rgba(0, 0, 0, 0.0758577);
  border-radius: 5px;
  width: 265px;
  height: 74px;
  font-weight: 300;
  font-size: 16px;
  line-height: 34px;
  padding: 20px;
  color: var(--gray-light);

  display: flex;
  align-items: center;

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

    svg {
      * {
        fill: var(--white);
      }
    }
  }


  ${media.greaterThan('medium')`
    width: 215px;
    height: 190px;
    flex-flow: column;
    padding: 29px;
    color: var(--text);

    svg {
      width: 69px;
      height: 68px;
      margin-bottom: 22px;
      margin-right: 0;
    }
  `}
`
