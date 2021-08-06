import { styled } from '@style';

interface SpacerProps {
  size: string | number;
}

const Spacer = styled('div', {
  '--size': 0,
  width: 'var(--size)',
  height: 'var(--size)',
});

export default Spacer;
