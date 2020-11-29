import React from 'react';
import styled from 'styled-components';
import { socialTwitter } from 'react-icons-kit/ionicons/socialTwitter';
import { socialCodepen } from 'react-icons-kit/ionicons/socialCodepen';
import { socialGithub } from 'react-icons-kit/ionicons/socialGithub';
import { socialLinkedin } from 'react-icons-kit/ionicons/socialLinkedin';

import ClickableIcon from '@components/ClickableIcon';
import TextLink from '@components/TextLink';
import MaxWidthWrapper from '@components/MaxWidthWrapper';
import { BREAKPOINTS } from '@constants';

const WIDTH = 24;

const Footer = () => (
  <Wrapper>
    <FooterContent>
      <Copyright>
        © 2020 – present Sam Rose
        <br />
        All Rights Reserved. <TextLink href="/rss.xml">RSS feed</TextLink>.
      </Copyright>
      <Icons>
        <p>Follow Me</p>
        <ClickableIcon
          size={WIDTH}
          href="https://codepen.io/samrose3"
          icon={socialCodepen}
          iconHover={socialCodepen}
          color={'var(--color-gray-400)'}
          colorHover={'var(--color-gray-800)'}
        />
        <ClickableIcon
          size={WIDTH}
          href="https://www.github.com/samrose3"
          icon={socialGithub}
          iconHover={socialGithub}
          color={'var(--color-gray-400)'}
          colorHover={'var(--color-gray-800)'}
        />
        <ClickableIcon
          size={WIDTH}
          href="https://www.twitter.com/_samrose3_"
          icon={socialTwitter}
          iconHover={socialTwitter}
          color={'var(--color-gray-400)'}
          colorHover={'var(--color-gray-800)'}
        />
        <ClickableIcon
          size={WIDTH}
          href="https://www.linkedin.com/in/samrose3"
          icon={socialLinkedin}
          iconHover={socialLinkedin}
          color={'var(--color-gray-400)'}
          colorHover={'var(--color-gray-800)'}
        />
      </Icons>
    </FooterContent>
  </Wrapper>
);

const Wrapper = styled.footer`
  display: flex;
`;

const FooterContent = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 1rem;
  color: var(--color-gray-900);
  border-top: 1px solid var(--color-gray-100);

  @media ${BREAKPOINTS.sm} {
    flex-direction: column;
  }
`;

const Copyright = styled.div`
  font-size: 0.875rem;
  text-align: left;
  line-height: 1.75;
`;

const Icons = styled.div`
  position: relative;
  justify-content: space-between;
  color: var(--color-gray-400);
  font-size: 0.625rem;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  margin-top: 1rem;

  & > p {
    margin-bottom: 0.5rem;
  }

  @media ${BREAKPOINTS.desktop} {
    margin-top: 0;

    & > * {
      margin-left: 0.75rem;
      text-align: right;
    }
  }
`;

export default Footer;
