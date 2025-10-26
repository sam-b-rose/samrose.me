import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { styled } from '@style';


import Card from '@components/Card';
import FullWidth from '@components/FullWidth';
import IndexPost from '@components/IndexPost';
import Layout from '@components/Layout';
import MainContent from '@components/MainContent';
import MaxWidthWrapper from '@components/MaxWidthWrapper';
import { capitalize } from '@utils';

type AllPosts = {
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
        <Helmet title={data.site.siteMetadata.title} />
        <MainContent>
          <MaxWidthWrapper>
            {Object.keys(posts).map((category) => (
              <Section key={category}>
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

const Section = styled('section', {
  margin: '3rem 0',

  '& > h1': {
    marginBottom: '1rem',
    fontSize: '2rem',
  },

  '&:last-of-type': {
    marginBottom: '6rem',
  },
});

const PreviewGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(20rem, 1fr))',
  gap: '2rem',
});

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
        path: `/posts/${node.frontmatter.slug}`,
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
            category
            abstract
          }
        }
      }
    }
  }
`;

export default PostsPage;
