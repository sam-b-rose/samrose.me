import styled from 'styled-components';
import Card from '@components/Card';

const BlogCard = styled(Card)`
  position: relative;
  max-width: 35em;
  margin: 2rem auto;
  overflow: hidden;
  font-size: 1.125em;
  transform: translateX(-4px);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background-color: var(--color-primary);
  }
`;

export default BlogCard;
