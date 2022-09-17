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

const issue = {
  "url": "https://api.github.com/repos/ceduardogodoi/ignite22-desafio-03/issues/1",
  "html_url": "https://github.com/ceduardogodoi/ignite22-desafio-03/issues/1",
  "id": 1376797738,
  "title": "Dummy issue for testing",
  "user": {
    "login": "ceduardogodoi"
  },
  "comments": 0,
  "created_at": "2022-09-17T15:11:15Z",
  "updated_at": "2022-09-17T15:12:11Z",
  "body": "# Dummy issue\r\n\r\nLorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ad.\r\n\r\n> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ad.\r\n\r\n```typescript\r\nfunction sayHelloTo(name: string) {\r\n  console.log(`Hello, ${name}!`)\r\n}\r\n```"
}

export function Post() {
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
        <ReactMarkdown># Hello, *world*!</ReactMarkdown>
        <ReactMarkdown>## react-markdown</ReactMarkdown>
      </section>
    </>
  )
}