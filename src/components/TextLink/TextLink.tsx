import { styled } from '@style';

import Link from '@components/Link';

const TextLink = styled(Link, {
  position: 'relative',
  color: '$primary',
  fontWeight: '500',
  textDecoration: 'none',
  transition: 'color 0.15s ease-in-out',

  '&::after': {
    content: '""',
    display: 'block',
    position: 'absolute',
    opacity: '0',
    right: '0',
    bottom: '-3px',
    left: '0',
    width: '100%',
    height: '2px',
    backgroundColor: '$primary',
    transform: 'translateY(-150%)',
    transition: 'transform 0.15s ease-in-out, opacity 0.15s ease-in-out',
  },

  '&:hover': {
    color: '$primary',

    '&::after': {
      opacity: '1',
      transform: 'translateY(0%)',
    },
  },
});

export default TextLink;
