import styled from 'styled-components'

export const Input = styled.input`
  background: #fff;
  border: 0;
  border: 2px solid #f2f2f2;
  padding: 12px;
  color: inherit;
  font: inherit;
  line-height: inherit;
  appearance: none;
  border-radius: 0.25em;
  margin-bottom: 20px;
  width: 100%;
  &:last-of-type {
    margin-bottom: 60px;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    box-shadow: 0 0 0 30px white inset !important;
  }
`
