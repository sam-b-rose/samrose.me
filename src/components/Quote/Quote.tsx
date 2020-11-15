import styled from 'styled-components';

import { BREAKPOINTS } from '@constants';

const Quote = styled.blockquote`
  font-size: 1.2em;
  font-style: italic;
  color: rgb(100, 100, 100);
  padding: 0 4rem;
  margin-top: 0;
  margin-bottom: 48px;

  @media ${BREAKPOINTS.md} {
    padding: 0 2rem;
  }

  @media ${BREAKPOINTS.sm} {
    padding: 0 1rem;
  }
`;

export default Quote;
