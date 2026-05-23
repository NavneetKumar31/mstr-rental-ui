import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import type { MruPage } from '../hooks/mru-useNavigation';

interface MruNavBarProps {
  page: MruPage;
  onNavigate: (page: MruPage) => void;
}

export default function MruNavBar({ page, onNavigate }: MruNavBarProps) {
  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: '1px solid rgba(15, 76, 129, 0.12)' }}>
      <Toolbar sx={{ justifyContent: 'space-between', gap: 2, flexWrap: 'wrap' }}>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: 0.6 }}>
            Master Rental UI
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Bold, trusted rental workflows
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
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
        </Box>
      </Toolbar>
    </AppBar>
  );
}
