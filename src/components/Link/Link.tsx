import React, { HTMLAttributes } from 'react';
import GatsbyLink from 'gatsby-link';
import { styled, darkTheme } from '@style';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

type LinkProps = HTMLAttributes<HTMLAnchorElement> & {
  href: string;
  target?: string;
  rel?: string;
};

const Link: React.FC<LinkProps> = ({ href, target, rel, ...delegated }) => {
  // Links are external if they start with `http` or `https`
  const external = href.match(/(^http|^mailto)/i);
  const internal = !external;

  // By default, external links should open in a new tab.
  if (typeof target === 'undefined') {
    target = external ? '_blank' : '_self';
  }

  let linkProps = {};
  // @ts-ignore
  linkProps[external ? 'href' : 'to'] = href;

  const safeRel = target === '_blank' ? 'noopener noreferrer' : rel;

  return (
    // @ts-ignore
    <StyledLink
      // @ts-ignore
      as={external ? 'a' : GatsbyLink}
      rel={safeRel}
      target={target}
      {...linkProps}
      {...delegated}
    />
  );
};

const StyledLink = styled(OutboundLink, {
  color: '$primary',
});

export default Link;
