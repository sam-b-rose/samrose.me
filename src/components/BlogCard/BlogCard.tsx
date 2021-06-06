import { styled } from '@style';
import Card from '@components/Card';

const BlogCard = styled(Card, {
  position: 'relative',
  maxWidth: '35em',
  margin: '2rem auto',
  overflow: 'hidden',
  fontSize: '1.125em',
  transform: 'translateX(-4px)',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '4px',
    height: '100%',
    backgroundColor: '$background',
  },
});

export default BlogCard;
