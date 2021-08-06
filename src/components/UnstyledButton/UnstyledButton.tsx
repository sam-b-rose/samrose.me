import { styled } from '@style';

export default styled('button', {
  display: 'block',
  margin: '0',
  padding: '0',
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
  textAlign: 'left',
  '&:focus': {
    outline: '2px solid',
    outlineColor: '$primary',
    outlineOffset: '2px',
  },
});
