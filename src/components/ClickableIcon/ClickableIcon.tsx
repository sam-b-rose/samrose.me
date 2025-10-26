import React from 'react';
import { styled } from '@style';
import { IconType } from 'react-icons';

import Link from '@components/Link';
import InvisibleButton from '@components/InvisibleButton';

type ClickableIconProps = {
  icon: IconType;
  iconHover: IconType;
  color: string;
  colorHover: string;
  size: number;
  href?: string;
};

export const ClickableIcon: React.FC<ClickableIconProps> = ({
  href,
  icon: Icon,
  iconHover: IconHover,
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
        <Icon color={color} size={size} />
      </IconWrapper>

      {IconHover && (
        <IconHoverWrapper>
          <IconHover color={colorHover} size={size} />
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
