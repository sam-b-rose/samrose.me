import React from 'react';
import styled from 'styled-components';
import { TippyProps } from '@tippy.js/react';

import UnstyledButton from '@components/UnstyledButton';
import Tooltip from '@components/Tooltip';

type AsteriskProps = {
  children: TippyProps['content'];
};

const Asterisk: React.FC<AsteriskProps> = ({ children }) => {
  return (
    <Wrapper>
      <Tooltip
        content={children}
        placement="bottom"
        animation="scale-subtle"
        theme="material"
        arrow={true}
        duration={200}
        delay={[250, 0]}
        distance={8}
      >
        <TouchArea>
          <AsteriskGlyph>*</AsteriskGlyph>
        </TouchArea>
      </Tooltip>
    </Wrapper>
  );
};

export const Wrapper = styled.span`
  display: inline-block;
  width: 15px;
  height: 1em;
  position: relative;
`;

const AsteriskGlyph = styled.span`
  position: relative;
  font-size: 21px;
  font-weight: 500;
  color: var(--color-primary);
`;

const TouchArea = styled(UnstyledButton)`
  position: absolute;
  display: block;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  padding: 10px;
  transform: translateY(5px);
  cursor: pointer;
`;

export default Asterisk;
