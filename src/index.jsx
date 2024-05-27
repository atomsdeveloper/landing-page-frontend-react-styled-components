import React from 'react';
import ReactDOM from 'react-dom/client';

import {GlobalStyles} from './styles/globals-styles.js';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme.js'

import Home from './templates/app/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Home />

      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>
);
