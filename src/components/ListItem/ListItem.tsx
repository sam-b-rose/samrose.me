import React from 'react';
import styled from 'styled-components';
import IconBase from 'react-icons-kit';
import { arrowRightC } from 'react-icons-kit/ionicons/arrowRightC';
import { starFullOutline } from 'react-icons-kit/typicons/starFullOutline';
import { starOutline } from 'react-icons-kit/typicons/starOutline';

const DefaultIcon = () => (
  <IconBase
    size={16}
    icon={arrowRightC}
    style={{ color: 'var(--color-primary)' }}
  />
);
const FullStarIcon = () => (
  <IconBase
    size={16}
    icon={starFullOutline}
    style={{ color: 'var(--color-primary)' }}
  />
);
const EmptyStarIcon = () => (
  <IconBase
    size={16}
    icon={starOutline}
    style={{ color: 'var(--color-primary)' }}
  />
);

const ICONS = {
  default: DefaultIcon,
  fullStar: FullStarIcon,
  emptyStar: EmptyStarIcon,
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
  padding-top: 2px;
`;

const Children = styled.div``;

export default ListItem;
