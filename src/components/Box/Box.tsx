/**
 * These components are used for the
 * "Building from the Box" post
 */
import React from 'react';
import { Theme } from 'theme-ui';
import styled, { CSSObject } from '@emotion/styled';
import { css, ThemeUIStyleObject } from '@theme-ui/css';

export const theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 600,
    bold: 700,
  },
  colors: {
    text: 'var(--colors-text)',
    background: 'var(--colors-background)',
    primary: 'var(--colors-primary)',
    secondary: 'var(--colors-secondary)',
    muted: 'var(--colors-gray600)',
    border: 'var(--colors-gray400)',
    outline: 'var(--colors-gray300)',
  },
  radii: {
    none: '0',
    sm: '0.125rem',
    md: '0.375rem',
    lg: '0.5rem',
    full: '9999px',
  },
};

interface BoxProps {
  __css?: ThemeUIStyleObject;
  css?: CSSObject;
  sx?: ThemeUIStyleObject;
  theme?: Theme;
}

const sx = (props: BoxProps) => css(props.sx)(props.theme);
const base = (props: BoxProps) => css(props.__css)(props.theme);

export const Box = styled.div(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  base,
  sx,
  (props) => props.css
);

export const Label = React.forwardRef<HTMLLabelElement>((props, ref) => (
  <Box
    // @ts-ignore
    ref={ref}
    as="label"
    __css={{
      fontSize: 2,
      fontWeight: 'heading',
    }}
    {...props}
  />
));

export const Text = React.forwardRef<HTMLDivElement>((props, ref) => (
  <Box
    ref={ref}
    __css={{
      fontSize: 1,
      fontWeight: 'body',
    }}
    {...props}
  />
));

export const TextInput = React.forwardRef<HTMLInputElement>((props, ref) => (
  <Box
    // @ts-ignore
    type="text"
    ref={ref}
    as="input"
    __css={{
      bg: 'background',
      border: '1px solid',
      borderColor: 'border',
      borderRadius: 'md',
      color: 'text',
      px: 3,
      py: 2,
      fontSize: 1,
      '&:focus': {
        boxShadow: ({ colors }) => `0 0 0 2px ${colors?.outline}`,
      },
    }}
    {...props}
  />
));

export default Box;
