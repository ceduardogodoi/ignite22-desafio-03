import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'
import ReactMarkdown from 'react-markdown'
import { Issue } from '../../contexts/IssueContext'
import { relativeDateFormatter } from '../../utils/formatter'
import { ContainerLink } from "./styles";

interface PostProps {
  issue?: Issue
}

export function Post({ issue }: PostProps) {
  return (
    <ContainerLink as={!issue ? 'div' : Link} to={issue ? `/post/${issue.id}` : '/'}>
      <header>
        <h2>{issue ? issue.title : <Skeleton />}</h2>

        <span>{issue ? relativeDateFormatter(issue.updated_at) : <Skeleton />}</span>
      </header>

      <div className="content">
        {issue ? <ReactMarkdown>{issue.body}</ReactMarkdown> : <Skeleton count={4} />}
      </div>
    </ContainerLink>
  )
}
