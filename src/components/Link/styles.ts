import { Link as LinkRouter } from 'react-router-dom'
import styled from 'styled-components'

export const Link = styled(LinkRouter)`
  color: ${props => props.theme.blue};
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    border-bottom: 1px solid ${props => props.theme.blue};
  }

  & span {
    margin-right: 0.5rem;
  }
`
