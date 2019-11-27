import styled from 'styled-components'

export const FormWrapper = styled.form`
  fieldset {
    border: none;
    display: flex;
    flex-flow: column;
  }

  label {
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 5px;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    box-shadow: 0 0 0 30px white inset !important;
  }
`
