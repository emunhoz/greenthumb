import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

const buttonStyle = css`
  border: ${({ shape }) =>
    shape === 'line' ? '1px solid var(--primary)' : 'none'};
  background: ${({ shape }) =>
    shape === 'line' ? 'transparent' : 'var(--primary)'};
  color: ${({ shape }) =>
    shape === 'line' ? 'var(--primary)' : 'var(--white)'};
  box-sizing: border-box;
  min-width: ${({ block }) => (block ? '100%' : '170px')};
  min-height: 50px;
  border-radius: 25px;
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 300;
  line-height: 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  svg {
    color: ${({ shape }) =>
    shape === 'line' ? 'var(--primary)' : 'var(--white)'};
  }

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  &:disabled,
  &.disabled {
    opacity: 0.5;
  }
`

export const Button = styled.button`
  ${buttonStyle}
`

export const Icon = styled.div`
  svg {
    height: 28px;
  }
`
