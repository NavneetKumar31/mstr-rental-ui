import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import type { MstrPage } from '../hooks/mstr-useNavigation';

interface MstrNavBarProps {
  page: MstrPage;
  mode: 'light' | 'dark';
  onNavigate: (page: MstrPage) => void;
  onToggleTheme: () => void;
}

export default function MstrNavBar({ page, mode, onNavigate, onToggleTheme }: MstrNavBarProps) {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ borderBottom: '1px solid rgba(15, 76, 129, 0.12)', py: 2 }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', gap: 2, flexWrap: 'wrap' }}>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: 0.6 }}>
            Master Rental UI
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Bold, trusted rental workflows
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', flexWrap: 'wrap' }}>
          <Button
            color={page === 'landing' ? 'primary' : 'inherit'}
            variant={page === 'landing' ? 'contained' : 'text'}
            onClick={() => onNavigate('landing')}
          >
            Home
          </Button>
          <Button
            color={page === 'signin' ? 'primary' : 'inherit'}
            variant={page === 'signin' ? 'contained' : 'text'}
            onClick={() => onNavigate('signin')}
          >
            Sign in
          </Button>
          <Button
            color={page === 'signup' ? 'secondary' : 'inherit'}
            variant={page === 'signup' ? 'contained' : 'text'}
            onClick={() => onNavigate('signup')}
          >
            Sign up
          </Button>
          <IconButton
            onClick={onToggleTheme}
            color="inherit"
            aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
            sx={{ borderRadius: 999, border: '1px solid', borderColor: 'divider' }}
          >
            {mode === 'light' ? <DarkModeIcon /> : <WbSunnyIcon />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
