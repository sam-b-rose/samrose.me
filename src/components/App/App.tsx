import React from 'react';
import { createGlobalStyle } from 'styled-components';

import { ThemeProvider } from '@components/ThemeContext';

import './reset.css';

const GlobalStyles = createGlobalStyle`
  :root {
    --font-weight-bold: 700;
    --font-weight-medium: 500;
    --font-weight-light: 400;
    --font-family: "Inter", Futura, -apple-system, sans-serif;
    --font-family-mono: "MonoLisa", "Fira Mono",monospace;

    --syntax-bg: #151628;
    --syntax-highlight: #330033;
    --syntax-txt: #C6797E;
    --syntax-comment: #5D636E;
    --syntax-prop: #D7A1A5;
    --syntax-punctuation: #5D5D6B;
    --syntax-bool: #F0B7A7;
    --syntax-val: #969E92;
    --syntax-var: #DB6375;
    --syntax-keyword: #8283A1;
    --syntax-str: #969E92;
    --syntax-name: #DBCDAB;
    --syntax-del: #DB6375;
    --syntax-regex: #969E92;
    --syntax-fn: #D7A1A5;
  }

  body {
    color: var(--color-text);
    background: var(--color-background);
  }

  a {
    color: var(--color-primary);
  }

  ::selection {
    background-color: #dfe2f1;
  }

  input:focus,
  textarea:focus,
  button:focus:not(:focus-visible) {
    outline: none;
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
