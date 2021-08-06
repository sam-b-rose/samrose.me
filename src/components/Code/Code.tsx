import React from 'react';
import { LiveProvider, LiveEditor } from 'react-live';
import { Language } from 'prism-react-renderer';
import { styled } from '@style';

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
      <EditorWrapper css={{ maxHeight }} data-language={language}>
        <LiveEditor style={{ whiteSpace: 'pre' }} />
      </EditorWrapper>
    </LiveProvider>
  );
};

const EditorWrapper = styled('div', {
  position: 'relative',
  flex: 1,
  padding: '1em',
  backgroundColor: '$syntaxBg',
  borderRadius: '0.75rem',
  marginBottom: '2rem',
  overflow: 'auto',
  fontSize: '0.95em',

  '&::after': {
    content: 'attr(data-language)',
    position: 'absolute',
    top: 0,
    right: 0,
    padding: '0.5rem 0.75rem',
    color: '$syntaxFg',
    fontSize: '0.75rem',
    fontWeight: 'bold',
  },

  textarea: {
    zIndex: -1,
  },

  '& pre': {
    overflowX: 'auto',
  },

  [`@media ${BREAKPOINTS.sm}`]: {
    marginBottom: '1.5rem',
  },
});

export default Code;
