import ReactMarkdown from 'react-markdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment
} from '@fortawesome/free-solid-svg-icons'
import { Link } from '../../components/Link/styles'
import { dateFormatter, relativeDateFormatter } from '../../utils/formatter'
import { BackLink, PostCard } from './styles';
import { useIssueContext } from '../../contexts/IssueContext';

export function Post() {
  const context = useIssueContext()

  if (!context || !context.selectedIssue) {
    return (
      <PostCard>
        <p>Favor selecionar uma issue</p>
      </PostCard>
    )
  }

  const { selectedIssue: issue } = context
  return (
    <>
      <PostCard>
        <nav>
          <BackLink href="/">
            <FontAwesomeIcon icon={faChevronLeft} width={12} height={12} />
            <span>Voltar</span>
          </BackLink>

          <Link href={issue.html_url}>
            <span>Ver no Github</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} width={12} height={12} />
          </Link>
        </nav>

        <h1>{issue.title}</h1>

        <footer>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>{issue.user.login}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>{relativeDateFormatter(issue.updated_at)}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />
            <span>{issue.comments} comentário(s)</span>
          </div>
        </footer>
      </PostCard>

      <section>
        <ReactMarkdown>{issue.body}</ReactMarkdown>
      </section>
    </>
  )
}