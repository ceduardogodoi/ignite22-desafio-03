import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faChevronLeft, faUserGroup } from '@fortawesome/free-solid-svg-icons'
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
            <span>Github</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} />
            <span>Rocketseat</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>32 Seguidores</span>
          </div>
        </footer>
      </PostCard>
    </>
  )
}