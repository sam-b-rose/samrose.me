import React from 'react';
import { LiveProvider, LiveEditor } from 'react-live';
import { Language } from 'prism-react-renderer';
import styled from 'styled-components';

import { BREAKPOINTS } from '@constants';
import { syntaxTheme } from '@helpers/syntax-highlighting.helpers';

type CodeProps = {
  children: string;
  className?: string;
  maxHeight?: number | string;
};

const Code: React.FC<CodeProps> = ({ children, maxHeight, className = '' }) => {
  const [hasBeenMounted, setHasBeenMounted] = React.useState(false);
  const language = className.replace(/language-/, '') as Language;

  React.useEffect(() => {
    setHasBeenMounted(true);
  }, []);

  if (!hasBeenMounted) {
    return null;
  }

  return (
    <LiveProvider
      code={children.trim()}
      disabled={true}
      noInline={true}
      language={language}
      theme={syntaxTheme}
    >
      <EditorWrapper maxHeight={maxHeight} data-language={language}>
        <LiveEditor style={{ whiteSpace: 'pre' }} />
      </EditorWrapper>
    </LiveProvider>
  );
};

const EditorWrapper = styled.div<{ maxHeight?: number | string }>`
  position: relative;
  flex: 1;
  padding: 1em;
  background: var(--colors-syntaxBg);
  border-radius: 0.75rem;
  max-height: ${(props) =>
    typeof props.maxHeight === 'undefined'
      ? null
      : typeof props.maxHeight === 'number'
      ? `${props.maxHeight}px`
      : props.maxHeight};
  margin-bottom: 2rem;
  overflow: auto;
  font-size: 0.95em;

  &::after {
    content: attr(data-language);
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.5rem 0.75rem;
    color: var(--colors-syntaxFg);
    font-size: 0.75rem;
    font-weight: bold;
  }

  textarea {
    z-index: -1;
  }

  & pre {
    overflow-x: auto;
  }

  @media ${BREAKPOINTS.sm} {
    margin-bottom: 1.5rem;
  }
`;

export default Code;
