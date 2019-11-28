import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-bottom: 55px;
`

export const Field = styled.input`
  background: #fff;
  border: 1px solid transparent;
  padding: 12px 20px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  appearance: none;
  border-radius: 19px;
  margin-bottom: 20px;
  width: 100%;
  transition: all .5s ease;
  margin-bottom: 0;

  &:focus {
    box-shadow: 0px 10px 28px rgba(0, 0, 0, 0.0896799);
    outline: none;
  }

  &.error {
    border: 1px solid var(--danger);
    color: var(--danger);
    box-shadow: none;
  }

  + label {
    display: block;
    margin-top: 55px;
  }

  + p {
    color: var(--danger);
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 27px;
    margin-bottom: 20px;
    svg {
      width: 15px;
    }
  }
`
