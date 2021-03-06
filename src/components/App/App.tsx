import React from 'react';
import { createGlobalStyle } from 'styled-components';

import { ThemeProvider } from '@components/ThemeContext';

import './reset.css';

const GlobalStyles = createGlobalStyle`
  :root {
    --font-weight-bold: 700;
    --font-weight-medium: 500;
    --font-weight-light: 400;
    --font-family: "Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --font-family-mono: "MonoLisa", "Fira Mono", monospace;

    --syntax-bg: #151628;
    --syntax-fg: #a2a3aa;
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
  
  html,
  body {
    background: var(--color-background);
    color: var(--color-text);
    overflow-x: hidden;
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

  .mermaid {
    border-radius: 0.5rem;
    background-color: var(--syntax-bg);
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
