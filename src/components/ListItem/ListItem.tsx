import React from 'react';
import styled from 'styled-components';
import IconBase from 'react-icons-kit';
import { arrowRightC } from 'react-icons-kit/ionicons/arrowRightC';

const DefaultIcon = () => (
  <IconBase
    size={16}
    icon={arrowRightC}
    style={{ color: 'var(--colors-primary)' }}
  />
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

const Wrapper = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 16px;
`;

const IconWrapper = styled.div`
  padding-right: 16px;
`;

const Children = styled.div``;

export default ListItem;
