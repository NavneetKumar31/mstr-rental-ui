import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

interface MstrLandingPageProps {
  onGoToSignIn: () => void;
  onGoToSignUp: () => void;
}

const features = [
  {
    title: 'List rentals faster',
    description: 'Create professional listings with clean onboarding and instant availability checks.',
  },
  {
    title: 'Trusted connections',
    description: 'Connect renters and owners with secure workflows and clear booking details.',
  },
  {
    title: 'Built for modern leasing',
    description: 'A simple, polished UI designed for high-conversion rental experiences.',
  },
];

export default function MstrLandingPage({ onGoToSignIn, onGoToSignUp }: MstrLandingPageProps) {
  return (
    <Box
      component="section"
      sx={{
        minHeight: 'calc(100vh - 124px)',
        px: 2,
        py: 6,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box sx={{ width: '100%', maxWidth: 1120, display: 'grid', gap: 4 }}>
        <Paper
          elevation={3}
          sx={{
            p: { xs: 4, md: 5 },
            borderRadius: 4,
            backgroundImage: (theme) =>
              `linear-gradient(135deg, ${theme.palette.primary.light}22 0%, ${theme.palette.background.paper} 100%)`,
          }}
        >
          <Typography variant="overline" sx={{ fontWeight: 700, color: 'primary.main', mb: 2, letterSpacing: 1.5 }}>
            Inspired by Airbnb and NoBroker
          </Typography>
          <Typography component="h1" variant="h2" sx={{ fontWeight: 900, letterSpacing: '-0.04em', mb: 3 }}>
            Rental experiences built for renters and owners.
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 680, mx: 'auto', mb: 4 }}>
            Discover a modern interface that makes listing, searching, and signing rentals feel effortless. Clean visuals, trusted workflows, and an onboarding flow designed for conversion.
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
            <Button size="large" variant="contained" onClick={onGoToSignUp}>
              Create account
            </Button>
            <Button size="large" variant="outlined" onClick={onGoToSignIn}>
              Sign in
            </Button>
          </Box>
        </Paper>

        <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' } }}>
          {features.map((feature) => (
            <Paper key={feature.title} elevation={1} sx={{ p: 3, borderRadius: 3 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
                {feature.title}
              </Typography>
              <Typography color="text.secondary">{feature.description}</Typography>
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
