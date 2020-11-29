import React from 'react';
import styled from 'styled-components';

import Banner from '@components/Banner';
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
      <Banner>
        <time>{humanizeDate(props.pageContext.frontmatter.publishedOn)}</time>
        <h1>{props.pageContext.frontmatter.title}</h1>
        {props.pageContext.frontmatter.abstract && (
          <p>{props.pageContext.frontmatter.abstract}</p>
        )}
      </Banner>
      {children}
      <Feedback>
        <Vine />
      </Feedback>
    </MDXPage>
  );
};

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
