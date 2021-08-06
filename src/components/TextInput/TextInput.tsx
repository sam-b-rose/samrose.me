import { styled } from '@style';

const TextInput = styled('input', {
  display: 'inline-block',
  border: '1px solid',
  borderColor: '$gray400',
  borderRadius: '0.375rem',
  backgroundColor: '$background',
  margin: '0',
  padding: '0.5rem 1rem',
  color: '$text',
  fontSize: '0.875rem',
  '&:focus': {
    outline: '0',
    boxShadow: '0 0 0 2px $colors$gray300',
  },
});

export default TextInput;
