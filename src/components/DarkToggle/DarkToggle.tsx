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
        viewBox="0 0 32 32"
        width="1em"
        height="1em"
        color="var(--colors-text)"
      >
        <circle
          cx="16"
          cy="16"
          r="14"
          fill="none"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path d=" M 16 0 A 16 16 0 0 0 16 32 z " fill="currentColor"></path>
      </svg>
    </ToggleButton>
  );
};

const ToggleButton = styled(InvisibleButton, {
  display: 'flex',
  alignItems: 'center',
  margin: '1px 0 0',
});

export default DarkToggle;
