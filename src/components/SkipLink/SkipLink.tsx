import styled from 'styled-components';

const SkipLink = styled.a`
  position: absolute;
  overflow: hidden;
  height: 1px;
  width: 1px;
  clip: rect(0 0 0 0);
  margin: -1px;
  padding: 0;
  box-shadow: 0 3px 8px 4px var(--color-shadow);
  border: 0;
  border-radius: 0.375rem;
  background-color: var(--color-background);
  color: var(--color-text);
  font-weight: var(--font-weight-medium);

  &:focus {
    position: fixed;
    top: 2rem;
    left: 2rem;
    padding: 1rem 1.5rem;
    z-index: 9999;
    width: auto;
    height: auto;
    clip: auto;
  }
`;

SkipLink.defaultProps = {
  href: '#main-content',
  children: 'Skip to content',
};

export default SkipLink;
