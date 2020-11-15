import styled from 'styled-components';

import { BREAKPOINTS } from '@constants';

const List = styled.ul`
  font-size: 1.125rem;
  margin-bottom: 2rem;
  @media ${BREAKPOINTS.sm} {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
  }
`;

export default List;
