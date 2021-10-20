import { styled } from '@style';

const List = styled('ul', {
  fontSize: '1.125rem',
  marginBottom: '2rem',
  '@bp2': {
    fontSize: '1.25rem',
    marginBottom: '1.5rem',
  },
});

export default List;
