import React from 'react';
import { styled } from '@style';
import { socialTwitter } from 'react-icons-kit/ionicons/socialTwitter';
import { socialCodepen } from 'react-icons-kit/ionicons/socialCodepen';
import { socialGithub } from 'react-icons-kit/ionicons/socialGithub';
import { socialLinkedin } from 'react-icons-kit/ionicons/socialLinkedin';

import ClickableIcon from '@components/ClickableIcon';
import MaxWidthWrapper from '@components/MaxWidthWrapper';

const WIDTH = 24;

const Footer = () => (
  <Wrapper>
    <FooterContent>
      <Copyright>
        © 2022 Sam Rose
        <br />
        All Rights Reserved.
      </Copyright>
      <Icons>
        <ClickableIcon
          size={WIDTH}
          href="https://codepen.io/samrose3"
          icon={socialCodepen}
          iconHover={socialCodepen}
          color={'var(--colors-gray400)'}
          colorHover={'var(--colors-gray900)'}
        />
        <ClickableIcon
          size={WIDTH}
          href="https://www.github.com/samrose3"
          icon={socialGithub}
          iconHover={socialGithub}
          color={'var(--colors-gray400)'}
          colorHover={'var(--colors-gray900)'}
        />
        <ClickableIcon
          size={WIDTH}
          href="https://www.twitter.com/_samrose3_"
          icon={socialTwitter}
          iconHover={socialTwitter}
          color={'var(--colors-gray400)'}
          colorHover={'var(--colors-gray900)'}
        />
        <ClickableIcon
          size={WIDTH}
          href="https://www.linkedin.com/in/samrose3"
          icon={socialLinkedin}
          iconHover={socialLinkedin}
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
