import styled from 'styled-components';

import { BREAKPOINTS, READING_WIDTH } from '@constants';

const MaxWidthWrapper = styled.div<{ maxWidth?: string }>`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: ${(props) => props.maxWidth || `${READING_WIDTH}px`};
  margin-left: auto;
  margin-right: auto;
  padding-left: 2rem;
  padding-right: 2rem;
  @media ${BREAKPOINTS.sm} {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export default MaxWidthWrapper;
