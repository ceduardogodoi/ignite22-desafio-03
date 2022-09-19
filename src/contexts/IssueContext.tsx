import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState
} from 'react'
import debounce from 'lodash.debounce'
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
  isLoading: boolean
  selectedIssue?: Issue;
  filteredIssues: Issue[];
  filterIssues(search: string): void
}

export const IssueContext = createContext<IssueContextType | undefined>(undefined)

interface IssueContextProviderProps {
  children: ReactNode;
}

export function IssueContextProvider({ children }: IssueContextProviderProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [filteredIssues, setFilteresIssues] = useState<Issue[]>([])

  const debounceFilter = useCallback(debounce(async (search: string) => {
    const encodedSearch = encodeURIComponent(search)
    const response = await api.get<Search>('/search/issues', {
      params: {
        q: `${encodedSearch}+repo:ceduardogodoi/ignite22-desafio-03`
      }
    })
    setFilteresIssues(response.data.items)
    setIsLoading(false)
  }, 500), [])

  function filterIssues(search: string) {
    setIsLoading(true)
    debounceFilter(search)
  }

  return (
    <IssueContext.Provider value={{
      isLoading,
      filteredIssues,
      filterIssues
    }}>
      {children}
    </IssueContext.Provider>
  )
}

export const useIssueContext = () => useContext(IssueContext)
