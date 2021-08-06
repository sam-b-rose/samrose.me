import { styled } from '@style';

import { BREAKPOINTS } from '@constants';

const List = styled('ul', {
  fontSize: '1.125rem',
  marginBottom: '2rem',
  [`@media ${BREAKPOINTS.sm}`]: {
    fontSize: '1.25rem',
    marginBottom: '1.5rem',
  },
});

export default List;
