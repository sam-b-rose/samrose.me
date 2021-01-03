import React from 'react';
import { Helmet } from 'react-helmet';

import { siteMetadata } from '../../../gatsby-config';

import Layout from '@components/Layout';
import FullWidth from '@components/FullWidth';
import MaxWidthWrapper from '@components/MaxWidthWrapper';
import MainContent from '@components/MainContent';
import MDXProvider from '@components/MDXProvider';

type MDXPageProps = {
  pageContext: {
    frontmatter: {
      title: string;
    };
  };
  location: {
    hash: string;
  };
};

const MDXPage: React.FC<MDXPageProps> = ({
  children,
  pageContext,
  location,
}) => {
  const { title } = pageContext.frontmatter;
  const pageTitle = title ? `${title} - ` : '';

  React.useEffect(() => {
    // On mount, scroll the user to the correct anchor, if specified
    const { hash } = location;
    if (hash) {
      window.requestAnimationFrame(() => {
        const anchor = document.querySelector(hash) || document.body;
        const offset = anchor.getBoundingClientRect().top + window.scrollY;

        window.scroll({
          top: offset,
          left: 0,
        });
      });
    }
  }, [location]);

  return (
    <MDXProvider>
      <Layout>
        <FullWidth>
          <Helmet title={`${pageTitle}${siteMetadata.title}`} />
          <MainContent>
            <MaxWidthWrapper as="article">{children}</MaxWidthWrapper>
          </MainContent>
        </FullWidth>
      </Layout>
    </MDXProvider>
  );
};

export default MDXPage;
