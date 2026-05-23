import { useState, type FormEvent } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

interface MstrSignInPageProps {
  onSwitchToSignUp: () => void;
}

export default function MstrSignInPage({ onSwitchToSignUp }: MstrSignInPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Paper component="section" className="mstr-page-card" aria-labelledby="signin-heading">
      <Typography id="signin-heading" component="h2" variant="h5" gutterBottom>
        Sign in to your account
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Secure access to listings, booking, and rental management.
      </Typography>
      <Box component="form" onSubmit={handleSubmit} className="mstr-form-grid" aria-label="Sign in form">
        <TextField
          label="Email address"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          autoComplete="email"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label="Remember me"
          sx={{ mt: 0 }}
        />
        <Button type="submit" size="large" fullWidth>
          Continue
        </Button>
      </Box>
      <Box className="mstr-form-footer">
        <Typography color="text.secondary">New here?</Typography>
        <Link component="button" variant="body2" onClick={onSwitchToSignUp} sx={{ fontWeight: 700 }}>
          Create an account
        </Link>
      </Box>
    </Paper>
  );
}
