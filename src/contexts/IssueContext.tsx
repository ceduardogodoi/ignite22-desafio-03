import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'
import { User } from './UserContext'

// Issue URL example
// https://api.github.com/repos/ceduardogodoi/ignite22-desafio-03/issues/1
const issue = {
  "url": "https://api.github.com/repos/ceduardogodoi/ignite22-desafio-03/issues/1",
  "html_url": "https://github.com/ceduardogodoi/ignite22-desafio-03/issues/1",
  "id": 1376797738,
  "title": "Dummy issue for testing",
  "user": {
    "login": "ceduardogodoi"
  },
  "comments": 0,
  "created_at": "2022-09-17T15:11:15Z",
  "updated_at": "2022-09-17T15:12:11Z",
  "body": "# Dummy issue\r\n\r\nLorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ad.\r\n\r\n> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ad.\r\n\r\n```typescript\r\nfunction sayHelloTo(name: string) {\r\n  console.log(`Hello, ${name}!`)\r\n}\r\n```"
}

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

export const IssueContext = createContext<Issue[] | undefined>(undefined)

interface IssueContextProviderProps {
  children: ReactNode;
}

export function IssueContextProvider({ children }: IssueContextProviderProps) {
  const [issues, setIssues] = useState<Issue[] | undefined>(undefined)

  async function fetchIssues() {
    const response = await api.get<Issue[]>('/repos/ceduardogodoi/ignite22-desafio-03/issues')
    setIssues(response.data)
  }

  useEffect(() => {
    fetchIssues()
  }, [])

  return (
    <IssueContext.Provider value={issues}>
      {children}
    </IssueContext.Provider>
  )
}

export const useIssueContext = () => useContext(IssueContext)
