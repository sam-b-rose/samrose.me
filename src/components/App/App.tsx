import React from 'react';
import { globalCss } from '@style';

import { ThemeProvider } from '@components/ThemeContext';

import './reset.css';

const globalStyles = globalCss({
  'html, body': {
    background: '$background',
    color: '$text',
    overflowX: 'hidden',
  },

  a: {
    color: '$primary',
  },

  '::selection': {
    backgroundColor: '#dfe2f1',
  },

  'input:focus, textarea:focus, button:focus:not(:focus-visible)': {
    outline: 'none',
  },
});

const App: React.FC = ({ children }) => {
  globalStyles();
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default App;
