import React from 'react';
import styled from 'styled-components';

import { BREAKPOINTS } from '@constants';

const Banner = styled.header`
  max-width: 80%;
  margin-top: 3rem;
  margin-bottom: 8rem;
  color: var(--colors-gray900);
  font-weight: 600;
  font-family: 'IBM Plex Sans', var(--fonts-inter);

  & > time {
    color: var(--colors-secondary);
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
      color: var(--colors-gray300);
    }
  }

  & > p {
    color: var(--colors-gray700);
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
