import { styled } from '@style';

const Banner = styled('header', {
  maxWidth: '80%',
  marginTop: '3rem',
  marginBottom: '8rem',
  color: '$gray900',
  fontWeight: '600',
  fontFamily: '"IBM Plex Sans", $inter',

  '& > time': {
    color: '$secondary',
    fontSize: '0.875rem',
    fontWeight: '$medium',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },

  '& > h1': {
    fontSize: '2.5rem',

    '&::after': {
      content: '" ¬"',
      display: 'inline-block',
      color: '$gray300',
    },
  },

  '& > p': {
    color: '$gray700',
    fontSize: '1.75rem',
  },

  '@bp2': {
    marginBottom: '4rem',

    '& > time': {
      fontSize: '0.875rem',
    },

    '& > h1': {
      fontSize: '2.25rem',
    },

    '& > p': {
      fontSize: '1.25rem',
    },
  },
});

export default Banner;
