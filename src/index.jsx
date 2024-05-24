import React from 'react';
import ReactDOM from 'react-dom/client';

import { GlobalStyles } from './styles/globals-styles';

import Home from './templates/app/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
    <GlobalStyles />
  </React.StrictMode>,
);
