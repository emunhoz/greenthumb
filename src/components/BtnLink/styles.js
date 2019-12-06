import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const BtnLink = styled(Link)`
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
  float: left;

  svg {
    color: ${({ shape }) =>
    shape === 'line' ? 'var(--primary)' : 'var(--white)'};
  }

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.5;
  }
`

export const Icon = styled.div`
  position: absolute;
  left: 10px;
  svg {
    height: 28px;
  }
`
