import styled from 'styled-components';

import { Z_INDICES, BREAKPOINTS } from '@constants';

const MainContent = styled.main`
  position: relative;
  z-index: ${Z_INDICES.mainContent};
  padding-top: 6rem;
  padding-bottom: 6rem;

  @media ${BREAKPOINTS.desktop} {
    padding-top: 5rem;
  }
`;

export default MainContent;
