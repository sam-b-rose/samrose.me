import { styled } from '@style';

const Paragraph = styled('p', {
  fontSize: '1.125rem',
  marginBottom: '2rem',
  '@bp2': {
    marginBottom: '1.5rem',
  },
});

export default Paragraph;
