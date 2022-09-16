import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import { api } from '../lib/axios'

interface User {
  login: string;
  avatar_url: string;
  html_url: string
  name: string;
  company: string
  bio: string | null;
  followers: number;
}

export const UserContext = createContext<User | undefined>(undefined)

interface UserContextProviderProps {
  children: ReactNode;
}

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [user, setUser] = useState<User | undefined>()

  async function fetchUser() {
    const response = await api.get<User>('/users/ceduardogodoi')
    setUser(response.data)
    // setTimeout(() => {
    //   setUser(response.data)
    // }, 3000)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext)
