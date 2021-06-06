import React, { HTMLAttributes } from 'react';
import GatsbyLink from 'gatsby-link';
import styled from 'styled-components';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

type LinkProps = HTMLAttributes<HTMLAnchorElement> & {
  href: string;
  target?: string;
  rel?: string;
};

const Link: React.FC<LinkProps> = ({ href, target, rel, ...delegated }) => {
  // Links are external if they start with `http` or `https`
  const external = href.match(/(^http|^mailto)/i);

  // By default, external links should open in a new tab.
  if (typeof target === 'undefined') {
    target = external ? '_blank' : '_self';
  }

  const LinkComponent = external ? ExternalLink : InternalLink;

  const safeRel = target === '_blank' ? 'noopener noreferrer' : rel;

  return (
    // @ts-ignore
    <LinkComponent
      as={external ? 'a' : GatsbyLink}
      href={href}
      rel={safeRel}
      target={target}
      {...delegated}
    />
  );
};

const ExternalLink = styled(OutboundLink)`
  color: ${(props) =>
    props.theme === 'light' ? 'white' : 'var(--colors-primary)'};
`;

const InternalLink = styled(ExternalLink).attrs((props) => ({
  to: props.href,
}))``;

export default Link;
