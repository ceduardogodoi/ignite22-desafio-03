import styled from 'styled-components'
import effectLeft from '../../assets/backgrounds/effect-left.png'
import effectRight from '../../assets/backgrounds/effect-right.png'

export const Container = styled.header`
  height: 18.5rem;
  background:
    url(${effectLeft}) right no-repeat,
    url(${effectRight}) left no-repeat,
    ${props => props.theme['base-profile']};
    
    & > div {
      margin: 0 auto;
      width: 1180px;
      height: inherit;
      display: flex;
      justify-content: center;
      align-items: center;
  }
`
