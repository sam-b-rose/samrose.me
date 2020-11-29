import styled from 'styled-components';

import { Z_INDICES, BREAKPOINTS } from '@constants';

const MainContent = styled.main`
  position: relative;
  z-index: ${Z_INDICES.mainContent};
  padding-top: 3rem;
  padding-bottom: 3rem;

  @media ${BREAKPOINTS.desktop} {
    padding-top: 3rem;
  }
`;

export default MainContent;
