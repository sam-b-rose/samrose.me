import styled from 'styled-components';

import Link from '@components/Link';

const TextLink = styled(Link)`
  position: relative;
  color: var(--color-primary);
  font-weight: 500;
  text-decoration: none;
  transition: color 0.15s ease-in-out;

  &::after {
    content: '';
    display: block;
    position: absolute;
    opacity: 0;
    right: 0;
    bottom: -3px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--color-primary);
    transform: translateY(-150%);
    transition: transform 0.15s ease-in-out, opacity 0.15s ease-in-out;
  }

  &:hover {
    color: var(--color-primary);

    &::after {
      opacity: 1;
      transform: translateY(0%);
    }
  }
`;

export default TextLink;
