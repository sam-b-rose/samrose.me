import React from 'react';
import styled from 'styled-components';
import { socialRss } from 'react-icons-kit/ionicons/socialRss';

import DarkToggle from '@components/DarkToggle';
import MaxWidthWrapper from '@components/MaxWidthWrapper';
import Logo from '@components/Logo';
import Navigation from '@components/Navigation';
import ClickableIcon from '@components/ClickableIcon';

const Header = () => {
  return (
    <Wrapper>
      <HeaderContent>
        <Logo />
        <Navigation />
        <IconGroup>
          <DarkToggle />
          <ClickableIcon
            size={18}
            href="/rss.xml"
            icon={socialRss}
            iconHover={socialRss}
            color={'var(--color-text)'}
            colorHover={'var(--color-text)'}
          />
        </IconGroup>
      </HeaderContent>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
`;

const HeaderContent = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
  padding-top: 1.5rem;
  padding-bottom: 0.75rem;
  align-items: center;
`;

const IconGroup = styled.div`
  display: flex;

  & > * {
    margin-left: 1rem;
    opacity: 0.7;

    &:hover {
      opacity: 1;
    }
  }
`;

export default Header;
