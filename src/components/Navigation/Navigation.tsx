import React from 'react';
import styled from 'styled-components';

import TextLink from '@components/TextLink';

const items = [
  // { text: 'Work', to: '/work' },
  { text: 'Posts', to: '/posts' },
  { text: 'About', to: '/about' },
  { text: 'Portfolio', to: 'https://portfolio.samrose.me' },
];

const Navigation = () => (
  <Wrapper>
    <NavigationList>
      {items.map(({ text, to }) => (
        <NavigationItem key={text}>
          <NavigationLink href={to}>{text}</NavigationLink>
        </NavigationItem>
      ))}
    </NavigationList>
  </Wrapper>
);

const Wrapper = styled.nav`
  display: flex;
  flex: 1 1 auto;
  padding: 0 1rem;
`;

const NavigationList = styled.ul`
  display: flex;
  list-style: none;
`;

const NavigationItem = styled.li`
  margin: 10px;
`;

const NavigationLink = styled(TextLink)`
  color: var(--color-text);
`;

export default Navigation;
