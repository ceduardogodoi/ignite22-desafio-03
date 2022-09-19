import ReactMarkdown from 'react-markdown'
import { Issue, useIssueContext } from '../../contexts/IssueContext'
import { relativeDateFormatter } from '../../utils/formatter'
import { ContainerLink } from "./styles";

interface PostProps {
  issue: Issue
}

export function Post({ issue }: PostProps) {
  const issueContext = useIssueContext()

  function handlePostClick() {
    issueContext?.selectIssue(issue.id)
  }

  return (
    <ContainerLink
      to={`/post/${issue.id}`}
      onClick={handlePostClick}
    >
      <header>
        <h2>{issue.title}</h2>

        <span>{relativeDateFormatter(issue.updated_at)}</span>
      </header>

      <div className="content">
        {<ReactMarkdown>{issue.body}</ReactMarkdown>}
      </div>
    </ContainerLink>
  )
}
