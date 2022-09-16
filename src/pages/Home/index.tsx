import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { useUserContext } from '../../contexts/UserContext';
import { Input } from "../../components/Input";
import { Link } from '../../components/Link/styles';
import { Post } from '../../components/Post';
import {
  AvatarContainer,
  InfoContainer,
  PostsContainer,
  ProfileCard,
  SearchContainer
} from "./styles";

export function Home() {
  const user = useUserContext()

  return (
    <>
      <ProfileCard>
        {user && (
          <>
            <AvatarContainer>
              <img src={user.avatar_url} width={148} height={148} alt="" />
            </AvatarContainer>

            <InfoContainer>
              <header>
                <h1>{user.name}</h1>

                <Link href={user.html_url}>
                  <span>Github</span>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} width={12} height={12} />
                </Link>
              </header>

              <div>
                <p>{user.bio ? user.bio : 'Este usuário não possui uma Bio'}</p>
              </div>

              <footer>
                <a href={user.html_url}>
                  <FontAwesomeIcon icon={faGithub} />
                  <span>{user.login}</span>
                </a>
                <div>
                  <FontAwesomeIcon icon={faBuilding} />
                  <span>{user.company}</span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faUserGroup} />
                  <span>{user.followers} Seguidores</span>
                </div>
              </footer>
            </InfoContainer>
          </>
        )}
      </ProfileCard>

      <SearchContainer>
        <header>
          <h2>Publicações</h2>

          <span>6 publicações</span>
        </header>

        <div>
          <Input placeholder="Buscar conteúdo" />
        </div>
      </SearchContainer>

      <PostsContainer>
        <Post />
        <Post />
        <Post />
        <Post />
      </PostsContainer>
    </>
  )
}