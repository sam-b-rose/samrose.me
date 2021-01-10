export const BREAKPOINT_SIZES = {
  xs: 320,
  sm: 540,
  md: 900,
  lg: 1024,
  xl: 1440,
};

export const BREAKPOINTS = {
  xs: `(max-width: ${BREAKPOINT_SIZES.xs}px)`,
  sm: `(max-width: ${BREAKPOINT_SIZES.sm}px)`,
  md: `(max-width: ${BREAKPOINT_SIZES.md}px)`,
  lg: `(max-width: ${BREAKPOINT_SIZES.lg}px)`,
  xl: `(max-width: ${BREAKPOINT_SIZES.xl}px)`,
  xsMin: `(min-width: ${BREAKPOINT_SIZES.xs + 1}px)`,
  smMin: `(min-width: ${BREAKPOINT_SIZES.sm + 1}px)`,
  mdMin: `(min-width: ${BREAKPOINT_SIZES.md + 1}px)`,
  lgMin: `(min-width: ${BREAKPOINT_SIZES.lg + 1}px)`,
  xlMin: `(min-width: ${BREAKPOINT_SIZES.xl + 1}px)`,
  desktop: `(min-width: ${BREAKPOINT_SIZES.sm + 1}px)`,
};

export const READING_WIDTH = 780;
export const EXTRA_WIDE_WIDTH = 1024;

const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i;

const userAgent =
  typeof window !== 'undefined' ? window.navigator.userAgent : 'node';

export const IS_MOBILE_USER_AGENT = mobileRegex.test(userAgent);

export const Z_INDICES = {
  hero: 1,
  mainContent: 10,
  header: 100,
};

export const COLOR_MODE_KEY = 'color-mode';
export const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode';

export const COLORS = {
  text: {
    light: 'hsl(222deg, 22%, 5%)',
    dark: 'hsl(0deg, 0%, 95%)',
  },
  background: {
    light: '#FFF',
    dark: '#0E0E1A',
  },
  primary: {
    light: '#7f5caa',
    dark: '#C6797E',
  },
  secondary: {
    light: '#87A7F9',
    dark: '#969E92',
  },
  'gray-100': {
    light: 'hsl(225deg, 25%, 95%)',
    dark: 'hsl(210deg, 15%, 20%)',
  },
  'gray-200': {
    light: 'hsl(225deg, 16%, 90%)',
    dark: 'hsl(210deg, 15%, 25%)',
  },
  'gray-300': {
    light: 'hsl(225deg, 8%, 80%)',
    dark: 'hsl(210deg, 10%, 40%)',
  },
  'gray-400': {
    light: 'hsl(225deg, 8%, 70%)',
    dark: 'hsl(210deg, 9%, 45%)',
  },
  'gray-500': {
    light: 'hsl(225deg, 7%, 60%)',
    dark: 'hsl(210deg, 8%, 50%)',
  },
  'gray-600': {
    light: 'hsl(225deg, 15%, 50%)',
    dark: 'hsl(210deg, 12%, 55%)',
  },
  'gray-700': {
    light: 'hsl(225deg, 12%, 40%)',
    dark: 'hsl(210deg, 14%, 66%)',
  },
  'gray-900': {
    light: 'hsl(225deg, 25%, 20%)',
    dark: 'hsl(210deg, 25%, 88%)',
  },
  'gray-1000': {
    light: 'hsl(225deg, 15%, 15%)',
    dark: 'hsl(210deg, 25%, 96%)',
  },
  subtle: {
    light: '#f5f7ff',
    dark: '#151628',
  },
  shadow: {
    light: 'rgba(0, 0, 0, 0.1)',
    dark: 'rgba(0, 0, 0, 0.4)',
  },
  'logo-light': {
    light: '#87729d',
    dark: '#D7A1A5',
  },
  'logo-dark': {
    light: '#532582',
    dark: '#9C5F63',
  },
};
