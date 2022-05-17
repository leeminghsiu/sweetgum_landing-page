import { createTheme } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';

const Theme = createTheme({
  typography: {
    fontFamily: [
      'Mulish',
      'Montserrat'
    ].join(','),
    h4: {
      fontFamily: 'Montserrat'
    },
    h5: {
      fontFamily: 'Montserrat'
    },
    h6: {
      fontFamily: 'Montserrat'
    },
  },
  palette: {
    action: {
      disabledBackground: '#7CA871',
      disabled: '#ffffff'
    },
    primary: {
      main: '#28BC00',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#F8F8FA',
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
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          borderRadius: '50px',
          background: '#F8F8FA'
        },
      },
    },
  },
});

export default Theme;