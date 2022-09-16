import { Link as LinkRouter } from 'react-router-dom'
import styled, { css } from 'styled-components'

const styles = css`
  color: ${props => props.theme.blue};
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: transparent;

  &:hover {
    border-bottom-color: ${props => props.theme.blue};
  }

  & span {
    margin-right: 0.5rem;
  }
`

export const RouterLink = styled(LinkRouter)`
  ${styles}
`

export const Link = styled.a`
  ${styles}
`
