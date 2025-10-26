import React from 'react';
import { styled } from '@style';
import { IoLogoRss } from 'react-icons/io5';

import ClickableIcon from '@components/ClickableIcon';
import DarkToggle from '@components/DarkToggle';
import Logo from '@components/Logo';
import MaxWidthWrapper from '@components/MaxWidthWrapper';
import Navigation from '@components/Navigation';
import SkipLink from '@components/SkipLink';

const Header = () => {
  return (
    <Wrapper>
      <HeaderContent>
        <SkipLink />
        <Logo />
        <Navigation />
        <IconGroup>
          <DarkToggle />
          <ClickableIcon
            size={18}
            href="/rss.xml"
            icon={IoLogoRss}
            iconHover={IoLogoRss}
            color={'var(--colors-text)'}
            colorHover={'var(--colors-text)'}
          />
        </IconGroup>
      </HeaderContent>
    </Wrapper>
  );
};

const Wrapper = styled('header', {
  display: 'flex',
});

const HeaderContent = styled(MaxWidthWrapper, {
  display: 'flex',
  justifyContent: 'space-between',
  paddingTop: '1.5rem',
  paddingBottom: '0.75rem',
  alignItems: 'center',
});

const IconGroup = styled('div', {
  display: 'flex',

  '& > *': {
    marginLeft: '1rem',
    opacity: '0.7',

    '&:hover': {
      opacity: '1',
    },
  },
});

export default Header;
