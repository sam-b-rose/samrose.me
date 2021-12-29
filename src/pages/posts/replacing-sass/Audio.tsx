import React from 'react';
import { styled } from '@style';

import { ThemeContext } from '@components/ThemeContext';
import { useScript } from '@hooks/useScript';

const Audio = () => {
  const { colorMode } = React.useContext(ThemeContext);
  useScript('//cdn.changelog.com/embed.js');

  if (!colorMode) {
    return null;
  }

  const theme = colorMode === 'dark' ? 'night' : 'day';

  return (
    <>
      <Figure>
        <FigCaption>Listen to Replacing Sass at Shopify</FigCaption>
        <audio
          data-theme={theme}
          data-src="https://changelog.com/jsparty/190/embed"
          src="https://chtbl.com/track/A551A9/https://cdn.changelog.com/uploads/jsparty/190/js-party-190.mp3"
          preload="none"
          className="changelog-episode"
          controls
        >
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </Figure>
    </>
  );
};

const Figure = styled('figure', {
  marginBottom: '2rem',
  textAlign: 'center',
});

const FigCaption = styled('figcaption', {
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: '1px',
  overflow: 'hidden',
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1px',
});

export default Audio;
