import React from 'react';
import { styled } from '@style';
import IconBase from 'react-icons-kit';

import Link from '@components/Link';
import InvisibleButton from '@components/InvisibleButton';

type ClickableIconProps = {
  icon: string;
  iconHover: string;
  color: string;
  colorHover: string;
  size: number;
  href?: string;
};

export const ClickableIcon: React.FC<ClickableIconProps> = ({
  href,
  icon,
  iconHover,
  color,
  colorHover,
  size,
  ...delegated
}) => {
  const Wrapper = href ? LinkWrapper : ButtonWrapper;

  return (
    // @ts-ignore
    <Wrapper href={href} {...delegated}>
      <IconWrapper>
        <IconBase icon={icon} style={{ color }} size={size} />
      </IconWrapper>

      {iconHover && (
        <IconHoverWrapper>
          <IconBase
            icon={iconHover}
            style={{ color: colorHover }}
            size={size}
          />
        </IconHoverWrapper>
      )}
    </Wrapper>
  );
};

const ButtonWrapper = styled(InvisibleButton, {
  position: 'relative',
  display: 'inline-block',
});

const LinkWrapper = styled(Link, {
  position: 'relative',
  display: 'inline-block',
});

const IconWrapper = styled('span', {
  display: 'inline-block',
  position: 'relative',
  zIndex: 1,
});

const IconHoverWrapper = styled('span', {
  display: 'inline-block',
  position: 'absolute',
  zIndex: '2',
  top: 0,
  left: 0,
  opacity: 0,
  transition: 'opacity 200ms',

  [`${LinkWrapper}:hover &`]: {
    opacity: 1,
  },

  [`${ButtonWrapper}:hover &`]: {
    opacity: 1,
  },
});

export default ClickableIcon;
