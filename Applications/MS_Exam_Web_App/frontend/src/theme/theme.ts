import { createTheme } from '@mui/material/styles';
import { colors } from './colors';

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary
    },

    secondary: {
      main: colors.secondary
    },

    background: {
      default: colors.background,
      paper: colors.paper
    },

    text: {
      primary: colors.text
    }
  },

  typography: {
    fontFamily: 'Segoe UI, Roboto, Arial'
  },

  shape: {
    borderRadius: 10
  }
});

export default theme;