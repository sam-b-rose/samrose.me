import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import styled from 'styled-components';

import { BREAKPOINTS } from '@constants';
import { interactWithCodeSample } from '@helpers/analytics.helpers';
import { syntaxTheme } from '@helpers/syntax-highlighting.helpers';

import FullWidth from '@components/FullWidth';
import MaxWidthWrapper from '@components/MaxWidthWrapper';

type LiveEditableCodeProps = {
  id: string;
  code: string;
  inline?: boolean;
  scope?: object;
  split?: number[];
  maxHeight?: number;
};

const LiveEditableCode: React.FC<LiveEditableCodeProps> = ({
  id,
  code,
  inline,
  scope,
  split = [66, 34],
  maxHeight,
}) => {
  const [hasBeenMounted, setHasBeenMounted] = React.useState(false);
  const [hasBeenTracked, setHasBeenTracked] = React.useState(false);
  const [leftSplit, rightSplit] = split;

  React.useEffect(() => {
    // HACK - There's an issue with React-Live and SSR.
    // To avoid dealing with this issue for now, I'm just not rendering things
    // on the initial pass.
    setHasBeenMounted(true);
  }, []);

  const trackChange = () => {
    // I'm not interested in how many tweaks the user makes,
    // I just wanna know if they interact with it at all.
    // So, stop recording after the first interaction.
    // (this is also to get around GA's throttling if you
    // fire too many events)
    if (hasBeenTracked) {
      interactWithCodeSample({
        component: 'LiveEditableCode',
        label: id,
      });

      setHasBeenTracked(true);
    }
  };

  if (!hasBeenMounted) {
    return null;
  }

  return (
    <LiveProvider
      code={code.trim()}
      scope={scope}
      noInline={!inline}
      theme={syntaxTheme}
    >
      <FullWidth>
        <Wrapper>
          <EditorWrapper
            split={leftSplit}
            maxHeight={maxHeight}
            onClick={trackChange}
          >
            <LiveEditor />
          </EditorWrapper>

          <PreviewWrapper split={rightSplit}>
            <LiveError />
            <LivePreview />
          </PreviewWrapper>
        </Wrapper>
      </FullWidth>
    </LiveProvider>
  );
};

const Wrapper = styled(MaxWidthWrapper)`
  display: flex;
  overflow: hidden;
  border-radius: 0.75rem;
  border: 2px solid var(--syntax-bg);
  margin-top: 2rem;
  margin-bottom: 72px;
  padding: 0;
  &:focus-within {
    border-color: var(--color-gray-200);
  }
  @media ${BREAKPOINTS.md} {
    flex-direction: column;
  }
  @media ${BREAKPOINTS.sm} {
    padding-left: 0;
    padding-right: 0;
  }
`;

const EditorWrapper = styled.div<{ split: number; maxHeight?: number }>`
  flex: ${(props) => props.split};
  background: var(--syntax-bg);
  max-height: ${(props) => props.maxHeight}px;
  overflow: auto;
  /*
    The code should not be editable on smaller screens.
    It's too janky of an experience.
    Show the code, but ignore taps.
  */
  @media ${BREAKPOINTS.sm} {
    textarea {
      pointer-events: none;
    }
  }
`;

const PreviewWrapper = styled.div<{ split: number }>`
  padding: 16px;
  flex: ${(props) => props.split};
  background: var(--color-background);
  @media ${BREAKPOINTS.md} {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
  @media ${BREAKPOINTS.mdMin} {
    border-left: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

export default LiveEditableCode;
