import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import { siteMetadata } from '../../gatsby-config';

import FullWidth from '@components/FullWidth';
import IndexPost from '@components/IndexPost';
import Banner from '@components/Banner';
import Hero from '@components/Hero';
import Layout from '@components/Layout';
import MainContent from '@components/MainContent';
import MaxWidthWrapper from '@components/MaxWidthWrapper';
import SectionTitle from '@components/SectionTitle';
import Spacer from '@components/Spacer';
import { BREAKPOINTS } from '@constants';

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
      <FullWidth>
        <MainContent>
          <MaxWidthWrapper>
            <Banner>
              <h1>Hi, I’m Sam</h1>
              <p>
                a design-minded software engineer currently interested in React,
                TypeScript, design systems, and state machines.
              </p>
            </Banner>
            <RecentSection>
              <SectionTitle>Recently Published</SectionTitle>
              <Spacer size="2rem" />
              {posts.map(({ id, ...props }) => (
                <div key={id}>
                  <IndexPost {...props} />
                  <Spacer size="5rem" />
                </div>
              ))}
            </RecentSection>
          </MaxWidthWrapper>
        </MainContent>
      </FullWidth>
    </Layout>
  );
};

const RecentSection = styled.section`
  margin-top: 8rem;

  @media ${BREAKPOINTS.desktop} {
    margin-top: 12rem;
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
