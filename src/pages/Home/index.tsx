import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { Link } from "../../components/Link";
import { Input } from "../../components/Input";
import { Post } from '../../components/Post';
import {
  AvatarContainer,
  InfoContainer,
  PostsContainer,
  ProfileCard,
  SearchContainer
} from "./styles";
import avatarImg from '../../assets/avatars/cameron-williamson.png'

export function Home() {
  return (
    <>
      <ProfileCard>
        <AvatarContainer>
          <img src={avatarImg} width={148} height={148} alt="" />
        </AvatarContainer>

        <InfoContainer>
          <header>
            <h1>Cameron Williamson</h1>

            <Link to="/">Github</Link>
          </header>

          <div>
            <p>
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
            </p>
          </div>

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