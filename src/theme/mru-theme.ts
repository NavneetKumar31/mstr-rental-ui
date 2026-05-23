import { createTheme } from '@mui/material/styles';

const mruTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#0f4c81', contrastText: '#ffffff' },
    secondary: { main: '#67d3b9', contrastText: '#0f172a' },
    background: { default: '#f7f9fc', paper: '#ffffff' },
    text: { primary: '#0f172a', secondary: '#526480' },
  },
  typography: {
    fontFamily: ['Inter', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    button: { textTransform: 'none' },
  },
  shape: { borderRadius: 16 },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
      },
    },
  },
});

export default mruTheme;
