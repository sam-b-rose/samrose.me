import React from 'react';
import styled from 'styled-components';

import { BREAKPOINTS } from '@constants';

const Banner = styled.div`
  max-width: 80%;
  margin-bottom: 8rem;
  color: var(--color-gray-800);
  font-weight: 600;
  font-family: 'IBM Plex Sans', san-serif;

  & > time {
    color: var(--color-secondary);
    font-size: 0.875rem;
    font-weight: var(--font-weight-medium);
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  & > h1 {
    font-size: 2.5rem;

    &::after {
      content: '\\2009\\00AC';
      display: inline-block;
      color: var(--color-gray-300);
    }
  }

  & > p {
    color: var(--color-gray-700);
    font-size: 1.75rem;
  }

  @media ${BREAKPOINTS.sm} {
    margin-bottom: 4rem;

    & > time {
      font-size: 0.875rem;
    }

    & > h1 {
      font-size: 2.25rem;
    }

    & > p {
      font-size: 1.25rem;
    }
  }
`;

export default Banner;
