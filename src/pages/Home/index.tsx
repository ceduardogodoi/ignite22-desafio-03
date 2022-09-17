import Skeleton from 'react-loading-skeleton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { useUserContext } from '../../contexts/UserContext'
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
        <AvatarContainer>
          {user ? (
            <img src={user.avatar_url} width={148} height={148} alt="" />
          ) : (
            <Skeleton />
          )}
        </AvatarContainer>

        <InfoContainer>
          <header>
            <h1>{user ? user.name : <Skeleton />}</h1>

            {user ? (
              <Link href={user.html_url}>
                <span>Github</span>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} width={12} height={12} />
              </Link>
            ) : (
              <div>
                <Skeleton />
              </div>
            )}
          </header>

          <div>
            {user ? (
              <p>{user.bio === null ? 'Usuário não registrou uma Bio' : user.bio}</p>
            ) : (
              <Skeleton count={3} />
            )}
          </div>

          <footer>
            {user ? (
              <a href={user.html_url}>
                <FontAwesomeIcon icon={faGithub} />
                <span>{user.login}</span>
              </a>
            ) : (
              <Skeleton />
            )}

            {user ? (
              <div>
                <FontAwesomeIcon icon={faBuilding} />
                <span>{user.company}</span>
              </div>
            ) : (
              <Skeleton />
            )}

            {user ? (
              <div>
                <FontAwesomeIcon icon={faUserGroup} />
                <span>{user.followers} Seguidores</span>
              </div>
            ) : (
              <Skeleton />
            )}
          </footer>
        </InfoContainer>
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