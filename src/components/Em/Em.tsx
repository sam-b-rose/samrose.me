import styled from 'styled-components';

const Em = styled.em`
  font-family: 'Fugaz One', sans-serif;
  font-size: 1.05em;
  color: ${(props) => props.color || 'var(--color-secondary)'};
  font-style: normal;
  .tippy-popper & {
    color: white !important;
  }
`;

export default Em;
