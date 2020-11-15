import styled from 'styled-components';

interface SpacerProps {
  size: string | number;
}

const Spacer = styled.div<SpacerProps>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
`;

export default Spacer;
