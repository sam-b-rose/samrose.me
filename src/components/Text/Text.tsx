import { styled } from '@style';

const Text = styled('a', {
  color: '$text',
  fontFamily: "'Doto'",
  fontSize: '$2',
  textDecoration: 'none',
  textTransform: 'uppercase',
  cursor: 'help',
  letterSpacing: '0.015em',

  '&:hover': {
    background: '$primary',
    color: '$gray900',
    fontWeight: '900',
  },
});

export default Text;
