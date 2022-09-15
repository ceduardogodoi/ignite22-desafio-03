import logoImg from '../../assets/logo.png'
import { Container } from './styles'

export function Header() {
  return (
    <Container>
      <div>
        <img src={logoImg} alt="Github Blog Logo" />
      </div>
    </Container>
  )
}
