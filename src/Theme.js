import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: '"PT Serif", serif',
    h6: {
      fontFamily: '"PT Serif", serif',
      fontWeight: 'bold',
    },
    body1: {
      fontFamily: '"PT Serif", serif',
    },
  },
  palette: {
    primary: {
      main: '#2f4f4f', 
    },
    secondary: {
      main: '#a0522d', 
    },
    background: {
      default: '#ecf0f1', 
    },
    text: {
      primary: '#2c3e50', 
      secondary: '#a0522d', 
    },
  },
});

export default theme;
