import React from 'react';
import styled from 'styled-components';

import MDXPage from '@components/MDXPage';
import Vine from '@components/Vine';

import { humanizeDate } from '@helpers/date.helpers';

type BlogPostProps = {
  pageContext: {
    frontmatter: {
      title: string;
      publishedOn: string;
      abstract?: string;
    };
  };
  location: {
    hash: string;
  };
};

const BlogPost: React.FC<BlogPostProps> = ({ children, ...props }) => {
  return (
    <MDXPage {...props}>
      <Header>
        <time>{humanizeDate(props.pageContext.frontmatter.publishedOn)}</time>
        <h1>{props.pageContext.frontmatter.title}</h1>
        {props.pageContext.frontmatter.abstract && (
          <p>{props.pageContext.frontmatter.abstract}</p>
        )}
      </Header>
      {children}
      <Feedback>
        <Vine />
      </Feedback>
    </MDXPage>
  );
};

const Header = styled.header`
  margin-bottom: 3rem;

  & > time {
    color: var(--color-secondary);
    font-size: 0.875rem;
    font-weight: var(--font-weight-medium);
    text-transform: uppercase;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  & > h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  & > p {
    font-size: 1.25rem;
    font-weight: 500;
    color: var(--color-gray-600);
  }
`;

// const Share = styled.div`
//   display: flex;
//   justify-content: center;
//   margin: 2rem 0;
// `;

const Feedback = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

export default BlogPost;
