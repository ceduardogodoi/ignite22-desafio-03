import styled from 'styled-components'

export const ProfileCard = styled.section`
  margin: 0 auto;
  padding: 2rem 2.5rem;
  border-radius: 10px;
  background: ${props => props.theme['base-profile']};
  display: flex;
  column-gap: 2rem;
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
  translate: 0 -30%;
`

const ContainerBase = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const AvatarContainer = styled(ContainerBase)`
  border-radius: 8px;
`

export const InfoContainer = styled(ContainerBase)`
  & header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & h1 {
      color: ${props => props.theme['base-title']};
      font-size: 1.5rem;
      line-height: 130%;
    }
  }

  & > div {
    margin: 0.5rem 0 1.5rem 0;
  }

  & footer {
    display: flex;
    column-gap: 1.5rem;

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

export const SearchContainer = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  & > header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & h2 {
      font-size: 1.125rem;
      color: ${props => props.theme['base-subtitle']};
    }

    & span {
      font-size: 0.875rem;
      color: ${props => props.theme['base-span']};
    }
  }

  & > div {
    & input {
      width: 100%;
    }
  }
`

export const PostsContainer = styled.section`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`
