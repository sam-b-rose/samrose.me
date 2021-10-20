import React from 'react';
import { styled } from '@style';
import IconBase from 'react-icons-kit';
import { send } from 'react-icons-kit/feather/send';

import Button from '@components/Button';
import TextInput from '@components/TextInput';

const NewsletterForm = () => (
  <Wrapper>
    <h3>
      Subscribe to the newsletter{' '}
      <IconBase
        icon={send}
        size={18}
        style={{ color: 'var(--colors-gray600)' }}
      />
    </h3>
    <p>
      Be the first to know when I post something new! Thoughts about code,
      design, startups and other interesting things.
    </p>
    <InlineForm
      as="form"
      action="https://buttondown.email/api/emails/embed-subscribe/samrose3"
      method="post"
      target="popupwindow"
    >
      <TextInput
        aria-label="Enter your email"
        type="email"
        name="email"
        id="bd-email"
        placeholder="hello@samrose.me"
      />
      <input type="hidden" value="1" name="embed" />
      <Button as="input" type="submit" value="Subscribe" />
    </InlineForm>
  </Wrapper>
);

const Wrapper = styled('div', {
  display: 'grid',
  gridGap: '1.5rem',
});

const InlineForm = styled('div', {
  display: 'grid',
  gridGap: '0.75rem',
  gridTemplateColumns: 'repeat(2, auto)',
  justifyContent: 'start',

  '@bp2': {
    gridTemplateColumns: 'auto',
    justifyContent: 'stretch',
  },
});

export default NewsletterForm;
