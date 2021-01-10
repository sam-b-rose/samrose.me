import styled from 'styled-components';

const TextInput = styled.input`
  display: inline-block;
  border: 1px solid var(--color-gray-400);
  border-radius: 0.375rem;
  background-color: var(--color-background);
  margin: 0;
  padding: 0.5rem 1rem;
  color: var(--color-text);
  font-size: 0.875rem;
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px var(--color-gray-300);
  }
`;

export default TextInput;
