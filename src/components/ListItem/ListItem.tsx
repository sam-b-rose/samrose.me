import React from 'react';
import { styled } from '@style';
import { IoArrowForward } from 'react-icons/io5';

const DefaultIcon = () => (
  <IoArrowForward size={16} color="var(--colors-primary)" />
);

const ICONS = {
  default: DefaultIcon,
};

type ListItemProps = {
  type: keyof typeof ICONS;
  children: React.ReactNode;
};

const ListItem: React.FC<ListItemProps> = ({ type = 'default', children }) => {
  const IconComponent = ICONS[type];

  return (
    <Wrapper>
      <IconWrapper>
        <IconComponent />
      </IconWrapper>
      <Children>{children}</Children>
    </Wrapper>
  );
};

const Wrapper = styled('li', {
  display: 'flex',
  alignItems: 'flex-start',
  marginBottom: '16px',
});

const IconWrapper = styled('div', {
  paddingRight: '16px',
});

const Children = styled('div', {});

export default ListItem;
