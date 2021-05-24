import React from 'react';
import Terser from 'terser';

import { COLOR_MODE_KEY } from '@constants';
import { darkTheme, getCssString } from './src/stitches.config';

function setColorsByTheme() {
  const colorModeKey = '🔑';

  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const prefersDarkFromMQ = mql.matches;
  const persistedPreference = localStorage.getItem(colorModeKey);

  let colorMode = 'light';

  const hasUsedToggle = typeof persistedPreference === 'string';

  if (hasUsedToggle) {
    colorMode = persistedPreference;
  } else {
    colorMode = prefersDarkFromMQ ? 'dark' : 'light';
  }

  let root = document.documentElement;
  if (colorMode === 'dark') {
    root.classList.add('dark');
  }
}

const MagicScriptTag = () => {
  const boundFn = String(setColorsByTheme).replace('🔑', COLOR_MODE_KEY);

  let calledFunction = `(${boundFn})()`;
  calledFunction = Terser.minify(calledFunction).code;

  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />;
};

const FallbackStyles = () => {
  // call darkTheme to import theme vars
  darkTheme.className;

  return (
    <style
      id="stitches"
      dangerouslySetInnerHTML={{
        __html: getCssString(),
      }}
    />
  );
};

export const onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
  setHeadComponents(<FallbackStyles key="fallback-styles" />);
  setPreBodyComponents(<MagicScriptTag key="magic-script-tag" />);
};
