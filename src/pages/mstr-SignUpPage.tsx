import { useState, type FormEvent } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

interface MstrSignUpPageProps {
  onSwitchToSignIn: () => void;
}

export default function MstrSignUpPage({ onSwitchToSignIn }: MstrSignUpPageProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Paper component="section" className="mstr-page-card" aria-labelledby="signup-heading">
      <Typography id="signup-heading" component="h2" variant="h5" gutterBottom>
        Create your account
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Join Master Rental UI with a secure and modern onboarding flow.
      </Typography>
      <Box component="form" onSubmit={handleSubmit} className="mstr-form-grid" aria-label="Sign up form">
        <TextField
          label="Full name"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
          required
          autoComplete="name"
        />
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
          autoComplete="new-password"
        />
        <TextField
          label="Confirm password"
          type="password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          required
          autoComplete="new-password"
        />
        <Button type="submit" size="large" fullWidth>
          Create account
        </Button>
      </Box>
      <Box className="mstr-form-footer">
        <Typography color="text.secondary">Already have an account?</Typography>
        <Link component="button" variant="body2" onClick={onSwitchToSignIn} sx={{ fontWeight: 700 }}>
          Sign in
        </Link>
      </Box>
    </Paper>
  );
}
