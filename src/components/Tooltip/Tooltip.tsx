import React from 'react';
import Tippy, { TippyProps } from '@tippy.js/react';
import { keyframes } from '@stitches/react';
import { styled } from '@style';

import { followCursor } from 'tippy.js';
import 'tippy.js/dist/tippy.css';

const Tooltip: React.FC<TippyProps> = ({ content, children, ...delegated }) => {
  return (
    <StyledTippy
      followCursor={true}
      content={content}
      {...delegated}
      plugins={[followCursor]}
    >
      {children}
    </StyledTippy>
  );
};

const enterKeyframes = keyframes({
  from: {
    transform: 'translateY(10px)',
  },
  to: {
    transform: 'translateY(20px)',
  },
});

const StyledTippy = styled(Tippy, {
  animation: `${enterKeyframes} 400ms both`,
  padding: '8px 8px 12px 8px',
  fontSize: '18px !important',
  textAlign: 'center',
});

export default Tooltip;
