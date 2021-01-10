import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  box-shadow: 0 0 0 0 var(--color-shadow);
  border-radius: 0.375rem;
  border: 1px solid var(--color-gray-200);
  background-color: var(--color-background);
  margin: 0;
  padding: 0.5rem 1rem;
  color: var(--color-text);
  font-size: 0.875rem;
  text-decoration: none;
  cursor: pointer;
  transition: box-shadow 0.3s ease;

  &:hover,
  &:focus {
    box-shadow: 0 1px 8px 0 var(--color-shadow);
  }
`;

export default Button;
