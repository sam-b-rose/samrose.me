/**
 * A post summary, found on the homepage
 */
import React from 'react';
import styled from 'styled-components';

import { BREAKPOINTS } from '@constants';
import { humanizeDate } from '@helpers/date.helpers';

import Paragraph from '@components/Paragraph';
import Link from '@components/Link';
import TextLink from '@components/TextLink';

type IndexPostProps = {
  path: string;
  title: string;
  excerpt: string;
  abstract: string;
  publishedOn: string;
};

const IndexPost: React.FC<IndexPostProps> = ({
  path,
  title,
  excerpt,
  publishedOn,
}) => (
  <>
    <PostLink href={path}>
      <PostTitle>{title}</PostTitle>
    </PostLink>
    <Date>{humanizeDate(publishedOn)} </Date>
    <Excerpt>{excerpt}</Excerpt>
    <TextLink href={path}>Read more</TextLink>
  </>
);

const PostLink = styled(Link)`
  color: var(--color-text);
  text-decoration: none;

  &:hover {
    color: var(--color-primary);
  }
`;

const PostTitle = styled.h4`
  font-size: 1.375rem;
  font-weight: 600;
  letter-spacing: -1px;

  @media ${BREAKPOINTS.sm} {
    font-size: 1.75rem;
  }
`;

const Date = styled.time`
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-gray-600);
  text-transform: uppercase;
`;

const Excerpt = styled(Paragraph)`
  margin: 1rem 0;
  font-size: 1rem;
`;

export default IndexPost;
