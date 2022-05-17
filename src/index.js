import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './landing/App';
import Theme from './theme.js'
import { ThemeProvider} from '@mui/material/styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
