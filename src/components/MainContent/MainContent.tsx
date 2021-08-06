import { styled } from '@style';

import { Z_INDICES } from '@constants';

const MainContent = styled('main', {
  position: 'relative',
  zIndex: Z_INDICES.mainContent,
  margin: '3rem 0',
});

MainContent.defaultProps = {
  id: 'main-content',
};

export default MainContent;
