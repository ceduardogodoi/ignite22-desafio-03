import { Route, Routes } from 'react-router-dom'
import { UserContextProvider } from './contexts/UserContext'
import { DefaultLayout } from './layouts/Default'
import { Home } from './pages/Home'
import { Post } from './pages/Post'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={
          <UserContextProvider>
            <Home />
          </UserContextProvider>
        } />
        <Route path="/post/:id" element={<Post />} />
      </Route>
    </Routes>
  )
}
