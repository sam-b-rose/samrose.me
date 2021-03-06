import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import styled from 'styled-components';

import { BREAKPOINTS } from '@constants';
import { interactWithCodeSample } from '@helpers/analytics.helpers';
import { syntaxTheme } from '@helpers/syntax-highlighting.helpers';

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
      <Wrapper>
        <EditorWrapper
          split={leftSplit}
          maxHeight={maxHeight}
          onClick={trackChange}
          data-language="jsx"
        >
          <LiveEditor />
        </EditorWrapper>

        <PreviewWrapper split={rightSplit}>
          <LiveError />
          <LivePreview />
        </PreviewWrapper>
      </Wrapper>
    </LiveProvider>
  );
};

const Wrapper = styled(MaxWidthWrapper)`
  display: flex;
  overflow: hidden;
  border-radius: 0.75rem;
  box-shadow: 0 3px 8px 0 var(--color-shadow);
  margin-top: 2rem;
  margin-bottom: 72px;
  padding: 0;
  &:focus-within {
    box-shadow: 0 0 0 2px var(--color-gray-300), 0 3px 8px 0 var(--color-shadow);
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
  position: relative;
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
  &::after {
    content: attr(data-language);
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.5rem 0.75rem;
    color: var(--syntax-fg);
    font-size: 0.75rem;
    font-weight: bold;
  }
`;

const PreviewWrapper = styled.div<{ split: number }>`
  padding: 16px;
  flex: ${(props) => props.split};
`;

export default LiveEditableCode;
