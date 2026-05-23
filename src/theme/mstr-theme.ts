import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import type { PaletteMode } from '@mui/material';

export function getMstrTheme(mode: PaletteMode) {
  return responsiveFontSizes(
    createTheme({
      palette: { mode },
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
        MuiCssBaseline: {
          styleOverrides: {
            body: {
              transition: 'background-color 0.3s, color 0.3s',
            },
          },
        },
      },
    }),
  );
}
