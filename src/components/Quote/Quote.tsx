import { styled } from '@style';

import { BREAKPOINTS } from '@constants';

const Quote = styled('blockquote', {
  position: 'relative',
  fontSize: '1.2em',
  fontStyle: 'italic',
  color: '$gray700',
  padding: '1rem 2rem',
  marginTop: '0',
  marginRight: 'auto',
  marginLeft: 'auto',
  maxWidth: '35em',

  [`@media ${BREAKPOINTS.md}`]: {
    padding: '1rem 2rem',
  },

  [`@media ${BREAKPOINTS.sm}`]: {
    padding: '1rem',
  },

  '&::before': {
    content: '“',
    position: 'absolute',
    left: '-1rem',
    top: '-1rem',
    display: 'block',
    fontSize: '5pc',
    fontFamily: 'Georgia',
    color: '$gray400',
  },
});

export default Quote;
