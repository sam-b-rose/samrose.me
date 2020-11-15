import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { siteMetadata } from '../../gatsby-config';
import { BREAKPOINTS } from '@constants';

import FullWidth from '@components/FullWidth';
import IndexPost from '@components/IndexPost';
import Hero from '@components/Hero';
import Layout from '@components/Layout';
import MainContent from '@components/MainContent';
import MaxWidthWrapper from '@components/MaxWidthWrapper';
import SectionTitle from '@components/SectionTitle';
import Spacer from '@components/Spacer';

type RecentPosts = {
  allMdx: {
    edges: PostNode[];
  };
};

type PostNode = {
  node: {
    id: string;
    slug: string;
    excerpt: string;
    frontmatter: {
      title: string;
      abstract: string;
      isPublished: boolean;
      publishedOn: string;
    };
  };
};

type Post = {
  id: string;
  path: string;
  title: string;
  excerpt: string;
  abstract: string;
  publishedOn: string;
};

const IndexPage = ({ data }: { data: RecentPosts }) => {
  const posts = getPosts(data);

  return (
    <Layout>
      <Helmet title={siteMetadata.title} />
      <Hero />
      <Intro>
        <h1>Hi, I’m Sam</h1>
        <p>a software engineer creating exceptional experiences for the web.</p>
      </Intro>
      <FullWidth>
        <MainContent>
          <MaxWidthWrapper>
            <SectionTitle>Recently Published</SectionTitle>
            <Spacer size="2rem" />
            {posts.map(({ id, ...props }) => (
              <>
                <IndexPost key={id} {...props} />
                <Spacer size="5rem" />
              </>
            ))}
          </MaxWidthWrapper>
        </MainContent>
      </FullWidth>
    </Layout>
  );
};

const Intro = styled(MaxWidthWrapper)`
  margin-top: 3rem;
  margin-bottom: 3rem;
  font-weight: 600;
  font-family: 'IBM Plex Sans', san-serif;
  color: var(--color-gray-800);

  & > h1 {
    font-size: 2.5rem;

    &::after {
      content: '\\2009\\00AC';
      display: inline-block;
      color: var(--color-gray-300);
    }
  }

  & > p {
    font-size: 1.75rem;
    color: var(--color-gray-700);

    @media ${BREAKPOINTS.smMin} {
      max-width: 75%;
      margin-bottom: 8rem;
    }
  }
`;

const sortDatesDescending = (a: Post, b: Post) => {
  return a.publishedOn > b.publishedOn ? -1 : 1;
};

const getPosts = (data: RecentPosts): Post[] =>
  data.allMdx.edges
    .map<null | Post>((edge) => {
      const { node } = edge;

      // Don't show unpublished posts!
      if (!node.frontmatter.isPublished) {
        return null;
      }

      return {
        id: node.id,
        path: `/posts/${node.slug}`,
        title: node.frontmatter.title,
        excerpt: node.excerpt,
        abstract: node.frontmatter.abstract,
        publishedOn: node.frontmatter.publishedOn,
      };
    })
    .filter<Post>((post): post is Post => !!post)
    .sort(sortDatesDescending);

export const query = graphql`
  query RecentPosts {
    allMdx {
      edges {
        node {
          id
          slug
          excerpt
          frontmatter {
            title
            isPublished
            publishedOn
            abstract
          }
        }
      }
    }
  }
`;

export default IndexPage;
