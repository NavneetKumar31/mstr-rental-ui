import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import { ThemeProvider } from '@mui/material/styles'
import MruNavBar from './components/mru-NavBar'
import MruSignInPage from './pages/mru-SignInPage'
import MruSignUpPage from './pages/mru-SignUpPage'
import { useMruNavigation } from './hooks/mru-useNavigation'
import mruTheme from './theme/mru-theme'
import './mru-App.css'

export default function MruApp() {
  const { page, navigate } = useMruNavigation()

  return (
    <ThemeProvider theme={mruTheme}>
      <CssBaseline />
      <Box className="mru-shell">
        <MruNavBar page={page} onNavigate={navigate} />
        <Container maxWidth="sm" className="mru-content">
          <Box className="mru-hero">
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
            <MruSignInPage onSwitchToSignUp={() => navigate('signup')} />
          ) : (
            <MruSignUpPage onSwitchToSignIn={() => navigate('signin')} />
          )}
        </Container>
      </Box>
    </ThemeProvider>
  )
}
