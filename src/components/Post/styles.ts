import styled from 'styled-components'

export const Container = styled.div`
  width: 26rem;
  height: 16.25rem;
  padding: 2rem;
  background: ${props => props.theme['base-post']};
  border-radius: 10px;

  & > header {
    display: flex;
    column-gap: 1rem;
    margin-bottom: 1.25rem;

    & > h2 {
      max-width: 17.688rem;
      color: ${props => props.theme['base-title']};
      font-size: 20px;
      translate: 0 -10%;
    }

    & > span {
      color: ${props => props.theme['base-span']};
      font-size: 14px;
    }
  }

  & .content {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`
