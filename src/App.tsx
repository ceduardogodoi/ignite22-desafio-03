import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { SkeletonTheme } from 'react-loading-skeleton'
import { Router } from './Router'
import { IssueContextProvider } from './contexts/IssueContext'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <SkeletonTheme
        baseColor={defaultTheme['base-border']}
        highlightColor={defaultTheme['base-label']}
      >
        <BrowserRouter>
          <IssueContextProvider>
            <Router />
          </IssueContextProvider>
        </BrowserRouter>
      </SkeletonTheme>
    </ThemeProvider>
  )
}

export default App
