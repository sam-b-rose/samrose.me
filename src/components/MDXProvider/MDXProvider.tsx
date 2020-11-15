import React from 'react';
import { MDXProvider as Provider } from '@mdx-js/react';

import Paragraph from '@components/Paragraph';
import Code from '@components/Code';
import List from '@components/List';
import ListItem from '@components/ListItem';
import InlineCode from '@components/InlineCode';
import SectionHeading from '@components/SectionHeading';
import SectionSubHeading from '@components/SectionSubHeading';
import Quote from '@components/Quote';
import TextLink from '@components/TextLink';
import Heading from '@components/Heading';
import Image from '@components/Image';
import Em from '@components/Em';

const MDXProvider: React.FC = ({ children }) => {
  return (
    <Provider
      components={{
        h1: () => null,
        h2: SectionHeading,
        h3: SectionSubHeading,
        h4: SubSubHeading,
        p: Paragraph,
        a: TextLink,
        blockquote: Quote,
        ul: List,
        li: ListItem,
        img: Image,
        em: Em,
        code: Code,
        inlineCode: InlineCode,
      }}
    >
      {children}
    </Provider>
  );
};

const SubSubHeading = (props: any) => <Heading size={4} {...props} />;

export default MDXProvider;
