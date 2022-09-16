import ReactMarkdown from 'react-markdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCalendarDay, faChevronLeft, faComment, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { Link } from "../../components/Link";
import { BackLink, PostCard } from "./styles";

export function Post() {
  return (
    <>
      <PostCard>
        <nav>
          <BackLink to="/">
            <FontAwesomeIcon icon={faChevronLeft} width={12} height={12} />
            <span>Voltar</span>
          </BackLink>

          <Link to="/">Ver no Github</Link>
        </nav>

        <h1>JavaScript data types and data structures</h1>

        <footer>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>cameronwll</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>Há 1 dia</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />
            <span>5 comentários</span>
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