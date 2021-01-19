import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { siteMetadata } from '../../../gatsby-config';

import Card from '@components/Card';
import FullWidth from '@components/FullWidth';
import IndexPost from '@components/IndexPost';
import Layout from '@components/Layout';
import MainContent from '@components/MainContent';
import MaxWidthWrapper from '@components/MaxWidthWrapper';
import { capitalize } from '@utils';

type AllPosts = {
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
      category: string;
      isPublished: boolean;
      publishedOn: string;
    };
  };
};

type Post = {
  id: string;
  path: string;
  title: string;
  category: string;
  excerpt: string;
  abstract: string;
  publishedOn: string;
};

const PostsPage = ({ data }: { data: AllPosts }) => {
  const posts = getPosts(data);

  return (
    <Layout>
      <FullWidth>
        <Helmet title={siteMetadata.title} />
        <MainContent>
          <MaxWidthWrapper>
            {Object.keys(posts).map((category) => (
              <Section>
                <h1>{capitalize(category)}</h1>
                <PreviewGrid>
                  {posts[category].map(({ id, ...props }) => (
                    <Card as="article" key={id}>
                      <IndexPost {...props} />
                    </Card>
                  ))}
                </PreviewGrid>
              </Section>
            ))}
          </MaxWidthWrapper>
        </MainContent>
      </FullWidth>
    </Layout>
  );
};

const Section = styled.section`
  margin: 3rem 0;

  & > h1 {
    margin-bottom: 1rem;
    font-size: 2rem;
  }

  &:last-of-type {
    margin-bottom: 6rem;
  }
`;

const PreviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 2rem;
`;

const sortDatesDescending = (a: Post, b: Post) => {
  return a.publishedOn > b.publishedOn ? -1 : 1;
};

type PostsByCategory = { [key: string]: Post[] };

const getPosts = (data: AllPosts): PostsByCategory => {
  const postsByCategory: PostsByCategory = {};

  const posts = data.allMdx.edges
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
        category: node.frontmatter.category,
        excerpt: node.excerpt,
        abstract: node.frontmatter.abstract,
        publishedOn: node.frontmatter.publishedOn,
      };
    })
    .filter<Post>((post): post is Post => !!post)
    .sort(sortDatesDescending);

  posts.forEach((post: Post) => {
    if (!postsByCategory[post.category]) {
      postsByCategory[post.category] = [];
    }

    postsByCategory[post.category].push(post);
  });

  return postsByCategory;
};

export const query = graphql`
  query AllPosts {
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
            category
            abstract
          }
        }
      }
    }
  }
`;

export default PostsPage;
