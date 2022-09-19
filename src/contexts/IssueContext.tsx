import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'
import { User } from './UserContext'

export interface Issue {
  id: number;
  url: string;
  title: string;
  user: Pick<User, 'login'>;
  created_at: string;
  updated_at: string;
  comments: number;
  html_url: string;
  body: string;
}

interface IssueContextType {
  issues?: Issue[];
  selectedIssue?: Issue;
  selectIssue(issueId?: number): void
}

export const IssueContext = createContext<IssueContextType | undefined>(undefined)

interface IssueContextProviderProps {
  children: ReactNode;
}

export function IssueContextProvider({ children }: IssueContextProviderProps) {
  const [issues, setIssues] = useState<Issue[] | undefined>(undefined)
  const [selectedIssue, setSelectedIssue] = useState<Issue | undefined>(undefined)

  async function fetchIssues() {
    const response = await api.get<Issue[]>('/repos/ceduardogodoi/ignite22-desafio-03/issues')
    // setIssues(response.data)
    setTimeout(() => setIssues(response.data), 5000)
  }

  function selectIssue(issueId?: number) {
    const issueFound = issues?.find(issue => issue.id === issueId)
    setSelectedIssue(issueFound)
  }

  useEffect(() => {
    fetchIssues()
  }, [])

  return (
    <IssueContext.Provider value={{
      issues,
      selectedIssue,
      selectIssue
    }}>
      {children}
    </IssueContext.Provider>
  )
}

export const useIssueContext = () => useContext(IssueContext)
