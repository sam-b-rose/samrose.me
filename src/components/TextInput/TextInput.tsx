import styled from 'styled-components';

const TextInput = styled.input`
  display: inline-block;
  border: 1px solid var(--colors-gray400);
  border-radius: 0.375rem;
  background-color: var(--colors-background);
  margin: 0;
  padding: 0.5rem 1rem;
  color: var(--colors-text);
  font-size: 0.875rem;
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px var(--colors-gray300);
  }
`;

export default TextInput;
