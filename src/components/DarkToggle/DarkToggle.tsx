import React from 'react';
import { styled } from '@style';

import { ThemeContext } from '@components/ThemeContext';
import InvisibleButton from '@components/InvisibleButton';

const DarkToggle = () => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);

  if (!colorMode) {
    return null;
  }

  const nextColor = colorMode !== 'dark' ? 'dark' : 'light';
  const title = `Activate ${nextColor} mode`;

  return (
    <ToggleButton
      aria-label={title}
      title={title}
      onClick={() => {
        setColorMode(nextColor);
      }}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        style={{ transform: 'rotate(40deg)' }}
      >
        <mask id="moon-mask-main-nav">
          <rect x="0" y="0" width="18" height="18" fill="#FFF"></rect>
          <circle cx="10" cy="2" r="8" fill="black"></circle>
        </mask>
        <circle
          cx="9"
          cy="9"
          fill="var(--colors-text)"
          mask="url(#moon-mask-main-nav)"
          r="8"
        ></circle>
        <g>
          <circle
            cx="17"
            cy="9"
            r="1.5"
            fill="var(--colors-text)"
            style={{ transformOrigin: 'center center', transform: 'scale(0)' }}
          ></circle>
          <circle
            cx="13"
            cy="15.928203230275509"
            r="1.5"
            fill="var(--colors-text)"
            style={{ transformOrigin: 'center center', transform: 'scale(0)' }}
          ></circle>
          <circle
            cx="5.000000000000002"
            cy="15.92820323027551"
            r="1.5"
            fill="var(--colors-text)"
            style={{ transformOrigin: 'center center', transform: 'scale(0)' }}
          ></circle>
          <circle
            cx="1"
            cy="9.000000000000002"
            r="1.5"
            fill="var(--colors-text)"
            style={{ transformOrigin: 'center center', transform: 'scale(0)' }}
          ></circle>
          <circle
            cx="4.9999999999999964"
            cy="2.071796769724492"
            r="1.5"
            fill="var(--colors-text)"
            style={{ transformOrigin: 'center center', transform: 'scale(0)' }}
          ></circle>
          <circle
            cx="13"
            cy="2.0717967697244912"
            r="1.5"
            fill="var(--colors-text)"
            style={{ transformOrigin: 'center center', transform: 'scale(0)' }}
          ></circle>
        </g>
      </svg>
    </ToggleButton>
  );
};

const ToggleButton = styled(InvisibleButton, {
  display: 'flex',
  alignItems: 'center',
});

export default DarkToggle;
