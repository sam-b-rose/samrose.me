import { styled } from '@style';

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

  '@bp2': {
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
