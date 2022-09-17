import styled from 'styled-components'
import { Link } from '../../components/Link/styles'

export const PostCard = styled.header`
  margin: 0 auto;
  padding: 2rem;
  border-radius: 10px;
  background: ${props => props.theme['base-profile']};
  display: flex;
  flex-direction: column;
  column-gap: 2rem;
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
  translate: 0 -30%;

  & nav {
    width: 100%;
    margin-bottom: 1.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & a {
      line-height: 0;
    }
  }

  & h1 {
    font-size: 1.5rem;
    line-height: 130%;
    color: ${props => props.theme['base-title']};
  }

  & footer {
    margin-top: 0.5rem;
    display: flex;
    column-gap: 2rem;

    & a {
      display: flex;
      align-items: center;
      column-gap: 0.5rem;
      text-decoration: none;

      &:visited {
        color: inherit;
      }
    }
  }
`

export const BackLink = styled(Link)`
  & span {
    margin-left: 0.5rem;
    margin-right: initial;
  }
`
