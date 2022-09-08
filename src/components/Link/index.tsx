import { LinkProps } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import * as S from './styles'

export function Link({ to, children, ...props }: LinkProps) {
  return (
    <S.Link
      to={to}
      {...props}
    >
      <span>{children}</span>
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
    </S.Link>
  )
}