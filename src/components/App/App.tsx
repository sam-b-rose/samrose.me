import React from 'react';
import { createGlobalStyle } from 'styled-components';

import { ThemeProvider } from '@components/ThemeContext';

import './reset.css';

const GlobalStyles = createGlobalStyle`  
  html,
  body {
    background: var(--colors-background);
    color: var(--colors-text);
    overflow-x: hidden;
  }

  a {
    color: var(--colors-primary);
  }

  ::selection {
    background-color: #dfe2f1;
  }

  input:focus,
  textarea:focus,
  button:focus:not(:focus-visible) {
    outline: none;
  }

  .mermaid {
    border-radius: 0.5rem;
    background-color: var(--colors-syntaxBg);
    padding: 1rem;
    margin: 2rem 0;

    * {
      line-height: 1.25;
    }

    svg {
      display: block;
      margin: 0 auto;
    }
  }
`;

const App: React.FC = ({ children }) => {
  return (
    <ThemeProvider>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default App;
