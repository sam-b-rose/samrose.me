import React from 'react';
import { styled } from '@style';
import {
  IoLogoTwitter,
  IoLogoCodepen,
  IoLogoGithub,
  IoLogoLinkedin,
} from 'react-icons/io5';
import { RiBlueskyFill, RiTwitterXFill } from 'react-icons/ri';

import ClickableIcon from '@components/ClickableIcon';
import MaxWidthWrapper from '@components/MaxWidthWrapper';

const WIDTH = 24;

const Footer = () => (
  <Wrapper>
    <FooterContent>
      <Copyright>
        © 2025 Sam Rose
        <br />
        All Rights Reserved.
      </Copyright>
      <Icons>
        <ClickableIcon
          size={WIDTH}
          href="https://codepen.io/sam-b-rose"
          icon={IoLogoCodepen}
          iconHover={IoLogoCodepen}
          color={'var(--colors-gray400)'}
          colorHover={'var(--colors-gray900)'}
        />
        <ClickableIcon
          size={WIDTH}
          href="https://www.github.com/sam-b-rose"
          icon={IoLogoGithub}
          iconHover={IoLogoGithub}
          color={'var(--colors-gray400)'}
          colorHover={'var(--colors-gray900)'}
        />
        <ClickableIcon
          size={WIDTH}
          href="https://x.com/sam_b_rose"
          icon={RiTwitterXFill}
          iconHover={RiTwitterXFill}
          color={'var(--colors-gray400)'}
          colorHover={'var(--colors-gray900)'}
        />
        <ClickableIcon
          size={WIDTH}
          href="https://bsky.app/profile/sam-b-rose.bsky.social"
          icon={RiBlueskyFill}
          iconHover={RiBlueskyFill}
          color={'var(--colors-gray400)'}
          colorHover={'var(--colors-gray900)'}
        />
        <ClickableIcon
          size={WIDTH}
          href="https://www.linkedin.com/in/sam-b-rose"
          icon={IoLogoLinkedin}
          iconHover={IoLogoLinkedin}
          color={'var(--colors-gray400)'}
          colorHover={'var(--colors-gray900)'}
        />
      </Icons>
    </FooterContent>
  </Wrapper>
);

const Wrapper = styled('footer', {
  display: 'flex',
});

const FooterContent = styled(MaxWidthWrapper, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '3rem 1rem',
  color: '$gray900',
  borderTop: '1px solid',
  borderTopColor: '$gray100',

  '@bp2': {
    flexDirection: 'column',
  },
});

const Copyright = styled('div', {
  fontSize: '0.875rem',
  textAlign: 'left',
  lineHeight: '1.75',
});

const Icons = styled('div', {
  position: 'relative',
  justifyContent: 'space-between',
  color: '$gray400',
  fontSize: '0.625rem',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  textAlign: 'center',
  marginTop: '1rem',

  '& > *:not(:first-of-type)': {
    marginLeft: '0.75rem',
  },

  '@bp4': {
    marginTop: 0,

    '& > *': {
      textAlign: 'right',
    },
  },
});

export default Footer;
