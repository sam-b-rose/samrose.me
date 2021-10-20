import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { styled } from '@style';

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
          css={{ flex: leftSplit, maxHeight }}
          onClick={trackChange}
          data-language="jsx"
        >
          <LiveEditor />
        </EditorWrapper>

        <PreviewWrapper css={{ flex: rightSplit }}>
          <LiveError />
          <LivePreview />
        </PreviewWrapper>
      </Wrapper>
    </LiveProvider>
  );
};

const Wrapper = styled(MaxWidthWrapper, {
  display: 'flex',
  overflow: 'hidden',
  borderRadius: '0.75rem',
  boxShadow: '0 3px 8px 0 var(--colors-shadow)',
  marginTop: '2rem',
  marginBottom: '72px',
  padding: '0',

  '&:focus-within': {
    boxShadow:
      '0 0 0 2px var(--colors-gray300), 0 3px 8px 0 var(--colors-shadow)',
  },

  '@bp3': {
    flexDirection: 'column',
  },

  '@bp2': {
    paddingLeft: '0',
    paddingRight: '0',
  },
});

const EditorWrapper = styled('div', {
  position: 'relative',
  flex: 1,
  backgroundColor: '$syntaxBg',
  overflow: 'auto',

  '@bp2': {
    textarea: {
      pointerEvents: 'none',
    },
  },

  '&::after': {
    content: 'attr(data-language)',
    position: 'absolute',
    top: '0',
    right: '0',
    padding: '0.5rem 0.75rem',
    color: '$syntaxFg',
    fontSize: '0.75rem',
    fontWeight: 'bold',
  },
});

const PreviewWrapper = styled('div', {
  padding: '16px',
  flex: 1,
});

export default LiveEditableCode;
