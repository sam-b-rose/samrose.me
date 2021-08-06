import { styled } from '@style';

const Em = styled('em', {
  fontFamily: '"Fugaz One", sans-serif',
  fontSize: '1.05em',
  color: '$secondary',
  fontStyle: 'normal',
  '.tippy-popper &': {
    color: 'white !important',
  },
});

export default Em;
