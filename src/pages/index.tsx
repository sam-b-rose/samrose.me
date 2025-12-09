import React from 'react';
import { styled } from '@style';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import FullWidth from '@components/FullWidth';
import IndexPost from '@components/IndexPost';
import Banner from '@components/Banner';
import Hero from '@components/Hero';
import Layout from '@components/Layout';
import MainContent from '@components/MainContent';
import MaxWidthWrapper from '@components/MaxWidthWrapper';
import SectionTitle from '@components/SectionTitle';
import Spacer from '@components/Spacer';
import Text from '@components/Text';

type RecentPosts = {
  site: {
    siteMetadata: {
      title: string;
    };
  };
  allMdx: {
    edges: PostNode[];
  };
};

type PostNode = {
  node: {
    id: string;
    excerpt: string;
    frontmatter: {
      slug: string;
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
      <Helmet title={data.site.siteMetadata.title} />
      <Hero />
      <FullWidth>
        <MaxWidthWrapper>
          <Banner>
            <h1>Hi, I'm Sam</h1>
            <ul>
              <li>
                <Text href="https://www.shopify.com" target="_blank">
                  Sr. Software Engineer @ Shopify
                </Text>
              </li>
              <li>
                <Text href="https://polaris.shopify.com/" target="_blank">
                  Building Polaris Design System
                </Text>
              </li>
              <li>
                <Text href="https://whimsy.joshwcomeau.com/" target="_blank">
                  Learning Whimsical Animations
                </Text>
              </li>
              <li>
                <Text href="https://www.makingsoftware.com/" target="_blank">
                  Reading Making Software
                </Text>
              </li>
            </ul>
          </Banner>
          <MainContent>
            <RecentSection>
              <SectionTitle>Recently Published</SectionTitle>
              <Spacer css={{ '--size': '2rem' }} />
              {posts.map(({ id, ...props }) => (
                <div key={id}>
                  <IndexPost {...props} />
                  <Spacer css={{ '--size': '5rem' }} />
                </div>
              ))}
            </RecentSection>
          </MainContent>
        </MaxWidthWrapper>
      </FullWidth>
    </Layout>
  );
};

const RecentSection = styled('section', {
  marginTop: '10rem',
  marginBottom: '3rem',

  '@bp4': {
    marginTop: '12rem',
  },
});

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
        path: `/posts/${node.frontmatter.slug}`,
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
    site {
      siteMetadata {
        title
      }
    }
    allMdx {
      edges {
        node {
          id
          excerpt
          frontmatter {
            slug
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
