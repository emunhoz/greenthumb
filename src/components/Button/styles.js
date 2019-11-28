import styled from 'styled-components'
import { ArrowRight } from 'styled-icons/feather/ArrowRight'

export const Button = styled.button`
  border: ${({ shape }) => shape === 'line' ? '1px solid var(--primary)' : 'none'};
  background: ${({ shape }) => shape === 'line' ? 'var(--white)' : 'var(--primary)'};
  color: ${({ shape }) => shape === 'line' ? 'var(--primary)' : 'var(--white)'};
  box-sizing: border-box;
  width: ${({ block }) => block ? '100%' : '170px'};
  height: 50px;
  border-radius: 25px;
  font-size: 16px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 300;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${({ shape }) => shape === 'line' ? 'var(--primary)' : 'var(--white)'};
  }

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.5;
  }
`

export const ArrowIcon = styled(ArrowRight)`
  position: absolute;
  height: 28px;
  left: 14px;
`
