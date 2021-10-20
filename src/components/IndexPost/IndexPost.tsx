/**
 * A post summary, found on the homepage
 */
import React from 'react';
import { styled, darkTheme } from '@style';

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
    <TextLink tabIndex={-1} href={path}>
      Read more
    </TextLink>
  </>
);

const PostLink = styled(Link, {
  [`&, .${darkTheme} &`]: {
    color: '$text',
    textDecoration: 'none',

    '&:hover': {
      color: '$primary',
    },
  },
});

const PostTitle = styled('h2', {
  fontSize: '1.375rem',
  fontWeight: '600',
  letterSpacing: '-1px',

  '@bp2': {
    fontSize: '1.75rem',
  },
});

const Date = styled('time', {
  fontSize: '0.875rem',
  fontWeight: '500',
  color: '$gray600',
  textTransform: 'uppercase',
});

const Excerpt = styled(Paragraph, {
  margin: '1rem 0',
  fontSize: '1rem',
});

export default IndexPost;
