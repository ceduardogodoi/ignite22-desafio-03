import styled from 'styled-components'
import effectLeft from '../../assets/backgrounds/effect-left.png'
import effectRight from '../../assets/backgrounds/effect-right.png'

export const Container = styled.header`
  height: 18.5rem;
  background: url(${effectLeft}) right no-repeat, url(${effectRight}) left no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`
