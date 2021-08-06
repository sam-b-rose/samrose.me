import { styled } from '@style';

import { BREAKPOINTS } from '@constants';

const Paragraph = styled('p', {
  fontSize: '1.125rem',
  marginBottom: '2rem',
  [`@media ${BREAKPOINTS.sm}`]: {
    marginBottom: '1.5rem',
  },
});

export default Paragraph;
