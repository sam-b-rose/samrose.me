import React from 'react';
import { LiveProvider, LiveEditor } from 'react-live';
import { Language } from 'prism-react-renderer';
import styled from 'styled-components';

import { BREAKPOINTS } from '@constants';
import { syntaxTheme } from '@helpers/syntax-highlighting.helpers';

import FullWidth from '@components/FullWidth';
import MaxWidthWrapper from '@components/MaxWidthWrapper';

type CodeProps = {
  children: string;
  className?: string;
  maxHeight?: number | string;
};

const Code: React.FC<CodeProps> = ({
  children,
  maxHeight,
  className = 'language-jsx',
}) => {
  const [hasBeenMounted, setHasBeenMounted] = React.useState(false);
  const language = className.replace(/language-/, '') as Language;

  React.useEffect(() => {
    // HACK - There's an issue with React-Live and SSR.
    // To avoid dealing with this issue for now, I'm just not rendering things
    // on the initial pass.
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
      <FullWidth>
        <Wrapper>
          <EditorWrapper maxHeight={maxHeight}>
            <LiveEditor />
          </EditorWrapper>
        </Wrapper>
      </FullWidth>
    </LiveProvider>
  );
};

const Wrapper = styled(MaxWidthWrapper)`
  display: flex;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${BREAKPOINTS.md} {
    flex-direction: column;
    padding-left: 0;
    padding-right: 0;
  }
`;

const EditorWrapper = styled.div<{ maxHeight?: number | string }>`
  flex: 1;
  padding: 1em;
  background: var(--syntax-bg);
  border-radius: 0.75rem;
  max-height: ${(props) =>
    typeof props.maxHeight === 'undefined'
      ? null
      : typeof props.maxHeight === 'number'
      ? `${props.maxHeight}px`
      : props.maxHeight};
  overflow: auto;
  font-size: 0.95em;
`;

export default Code;
