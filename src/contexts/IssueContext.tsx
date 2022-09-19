import { createContext, ReactNode, useContext, useState } from 'react'
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

interface Search {
  incomplete_results: boolean;
  items: Issue[];
  total_count: number
}

interface IssueContextType {
  selectedIssue?: Issue;
  filteredIssues?: Issue[];
  filterIssues(search: string): void
}

export const IssueContext = createContext<IssueContextType | undefined>(undefined)

interface IssueContextProviderProps {
  children: ReactNode;
}

export function IssueContextProvider({ children }: IssueContextProviderProps) {
  const [filteredIssues, setFilteresIssues] = useState<Issue[] | undefined>(undefined)

  async function filterIssues(search: string) {
    const encodedSearch = encodeURIComponent(search)
    const response = await api.get<Search>('/search/issues', {
      params: {
        q: `${encodedSearch}+repo:ceduardogodoi/ignite22-desafio-03`
      }
    })
    setFilteresIssues(response.data.items)
  }

  return (
    <IssueContext.Provider value={{
      filteredIssues,
      filterIssues
    }}>
      {children}
    </IssueContext.Provider>
  )
}

export const useIssueContext = () => useContext(IssueContext)
