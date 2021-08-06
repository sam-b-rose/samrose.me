import React, { useEffect, useState } from 'react';
import { styled } from '@style';

import Banner from '@components/Banner';
import BlogCard from '@components/BlogCard';
import MDXPage from '@components/MDXPage';
import NewsletterForm from '@components/NewsletterForm';
import TextLink from '@components/TextLink';
import Vine from '@components/Vine';

import { humanizeDate } from '@helpers/date.helpers';

type BlogPostProps = {
  pageContext: {
    frontmatter: {
      slug: string;
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
  const { slug } = props.pageContext.frontmatter;
  const [links, setLinks] = useState({
    twitter: 'https://mobile.twitter.com/search?q=_samrose3_',
    github: 'https://github.com/samrose3/samrose.me',
  });

  useEffect(() => {
    const encodedUrl = window.encodeURIComponent(
      `https://samrose.me/posts/${slug}`
    );

    setLinks({
      twitter: `https://mobile.twitter.com/search?q=${encodedUrl}`,
      github: `https://github.com/samrose3/samrose.me/edit/main/src/pages/posts/${slug}/index.mdx`,
    });
  }, [slug]);

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

      <InlineLinks>
        <TextLink href={links.twitter}>Discuss on Twitter</TextLink>
        <div>•</div>
        <TextLink href={links.github}>Edit post on GitHub</TextLink>
      </InlineLinks>

      <PostSection>
        <BlogCard>
          <NewsletterForm />
        </BlogCard>
      </PostSection>
      <PostSection>
        <Vine />
      </PostSection>
    </MDXPage>
  );
};

const PostSection = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  margin: '2rem 0',
});

const InlineLinks = styled('footer', {
  display: 'grid',
  gridGap: '0.5rem',
  gridTemplateColumns: 'repeat(3, auto)',
  justifyContent: 'start',
  borderBottom: '1px solid',
  borderBottomColor: '$gray100',
  padding: '2rem 0',
});

export default BlogPost;
