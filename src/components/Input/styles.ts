import styled from 'styled-components'

export const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid ${props => props.theme['base-border']};
  border-radius: 6px;
  background: ${props => props.theme['base-input']};
  color: ${props => props.theme['base-text']};

  &::placeholder {
    color: ${props => props.theme['base-label']};
  }

  &:focus {
    border: 1px solid ${props => props.theme.blue};
  }
`
