import { styled } from '@style';

const SkipLink = styled('a', {
  position: 'absolute',
  overflow: 'hidden',
  height: '1px',
  width: '1px',
  clip: 'rect(0 0 0 0)',
  margin: '-1px',
  padding: '0',
  boxShadow: '0 3px 8px 4px $colors$shadow)',
  border: '0',
  borderRadius: '0.375rem',
  backgroundColor: '$background',
  color: '$text',
  fontWeight: '$medium',

  '  &:focus': {
    position: 'fixed',
    top: '2rem',
    left: '2rem',
    padding: '1rem 1.5rem',
    zIndex: '9999',
    width: 'auto',
    height: 'auto',
    clip: 'auto',
  },
});

SkipLink.defaultProps = {
  href: '#main-content',
  children: 'Skip to content',
};

export default SkipLink;
