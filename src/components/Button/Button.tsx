import { styled } from '@style';

const Button = styled('button', {
  display: 'inline-block',
  boxShadow: '0 0 0 0 var(--colors-shadow)',
  borderRadius: '0.375rem',
  border: '1px solid var(--colors-gray200)',
  backgroundColor: 'var(--colors-background)',
  margin: '0',
  padding: '0.5rem 1rem',
  color: 'var(--colors-text)',
  fontSize: '0.875rem',
  textDecoration: 'none',
  cursor: 'pointer',
  transition: 'box-shadow 0.3s ease',

  '&:hover, &:focus': {
    boxShadow: '0 1px 8px 0 $colors$shadow',
  },
});

export default Button;
