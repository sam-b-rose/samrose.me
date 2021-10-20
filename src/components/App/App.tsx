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

  '.mermaid': {
    borderRadius: '0.5rem',
    backgroundColor: '$syntaxBg',
    padding: '1rem',
    margin: '2rem 0',

    '*': {
      lineHeight: 1.25,
    },

    svg: {
      display: 'block',
      margin: '0 auto',
    },
  },
});

const App: React.FC = ({ children }) => {
  globalStyles();
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default App;
