import { createTheme } from '@mui/material/styles';
import { hover } from '@testing-library/user-event/dist/hover';

const Theme = createTheme({
  typography: {
    fontWeightLight: 300,
    fontWeightRegular: 300,
    fontWeightMedium: 300,
    fontWeightBold: 700,
    fontFamily: [
      'Mulish',
      'Montserrat'
    ].join(','),
    h4: {
      fontFamily: 'Montserrat',
      fontWeight: '700'
    },
    h5: {
      fontFamily: 'Montserrat',
      fontWeight: '700'
    },
    h6: {
      fontFamily: 'Mulish',
    },
  },
  palette: {
    action: {
      disabledBackground: '#44AC21',
      disabled: '#ffffff'
    },
    primary: {
      main: '#5FC92E',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#44AC21',
      contrastText: '#ffffff'
    },
    textColor: {
      main: '#000000'
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          borderRadius: '50px',
          fontFamily: 'Montserrat',
          fontWeight: '700',
          backgroundColor: '#44AC21',
        }
      },
    },
    MuiPaper: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          borderRadius: '50px',
          backgroundColor: '#FBFCFF'
        },
      },
    },
  },
});

export default Theme;