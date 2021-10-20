import { styled } from '@style';

import { READING_WIDTH } from '@constants';

const MaxWidthWrapper = styled('div', {
  position: 'relative',
  zIndex: '2',
  width: '100%',
  maxWidth: `${READING_WIDTH}px`,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: '2rem',
  paddingRight: '2rem',
  '@bp2': {
    paddingLeft: '1rem',
    paddingRight: '1rem',
  },
});

export default MaxWidthWrapper;
