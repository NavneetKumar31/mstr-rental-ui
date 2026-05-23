import { useEffect, useMemo, useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import { ThemeProvider } from '@mui/material/styles'
import MstrNavBar from './components/mstr-NavBar'
import MstrSignInPage from './pages/mstr-SignInPage'
import MstrSignUpPage from './pages/mstr-SignUpPage'
import MstrLandingPage from './pages/mstr-LandingPage'
import { useMstrNavigation } from './hooks/mstr-useNavigation'
import { getMstrTheme } from './theme/mstr-theme'
import './mstr-App.css'

export default function MstrApp() {
  const [mode, setMode] = useState<'light' | 'dark'>('light')
  const { page, navigate } = useMstrNavigation()

  useEffect(() => {
    const query = window.matchMedia?.('(prefers-color-scheme: dark)')
    if (query) {
      setMode(query.matches ? 'dark' : 'light')
      const handleChange = (event: MediaQueryListEvent) => setMode(event.matches ? 'dark' : 'light')
      query.addEventListener('change', handleChange)
      return () => query.removeEventListener('change', handleChange)
    }
    return undefined
  }, [])

  const theme = useMemo(() => getMstrTheme(mode), [mode])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="mstr-shell">
        <MstrNavBar page={page} mode={mode} onNavigate={navigate} onToggleTheme={() => setMode((prev) => (prev === 'light' ? 'dark' : 'light'))} />

        {page === 'landing' ? (
          <MstrLandingPage onGoToSignIn={() => navigate('signin')} onGoToSignUp={() => navigate('signup')} />
        ) : (
          <Container maxWidth="sm" className="mstr-content">
            <Box className="mstr-hero">
              <Typography variant="overline" color="primary" sx={{ fontWeight: 700, letterSpacing: 1.2 }}>
                Modern rental onboarding
              </Typography>
              <Typography component="h1" variant="h3" gutterBottom>
                Trusted rental experiences for teams and tenants.
              </Typography>
              <Typography color="text.secondary">
                Bold, dependable design with a minimal and modern interface built for fast user conversion.
              </Typography>
            </Box>

            {page === 'signin' ? (
              <MstrSignInPage onSwitchToSignUp={() => navigate('signup')} />
            ) : (
              <MstrSignUpPage onSwitchToSignIn={() => navigate('signin')} />
            )}
          </Container>
        )}
      </Box>
    </ThemeProvider>
  )
}
