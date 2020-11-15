import styled from 'styled-components';

import { BREAKPOINTS } from '@constants';

const Paragraph = styled.p`
  font-size: 1.125rem;
  margin-bottom: 2rem;
  @media ${BREAKPOINTS.sm} {
    margin-bottom: 1.5rem;
  }
`;

export default Paragraph;
