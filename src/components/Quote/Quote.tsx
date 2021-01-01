import styled from 'styled-components';

import { BREAKPOINTS } from '@constants';

const Quote = styled.blockquote`
  position: relative;
  font-size: 1.2em;
  font-style: italic;
  color: var(--color-gray-700);
  padding: 1rem 2rem;
  margin-top: 0;
  margin-right: auto;
  margin-left: auto;
  max-width: 35em;

  @media ${BREAKPOINTS.md} {
    padding: 1rem 2rem;
  }

  @media ${BREAKPOINTS.sm} {
    padding: 1rem;
  }

  &::before {
    content: '“';
    position: absolute;
    left: -1rem;
    top: -1rem;
    display: block;
    font-size: 5pc;
    font-family: Georgia;
    color: var(--color-gray-400);
  }
`;

export default Quote;
