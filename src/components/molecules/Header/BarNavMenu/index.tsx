import { Children, MouseEventHandler, ReactNode, isValidElement } from 'react';
import styled, { css } from 'styled-components';
import Title from './common/Title';
import SubMenu from './common/SubMenu';

const SubMenuType = (<SubMenu title="" href="" />).type;
const TitleType = (<Title />).type;

const getSubMenus = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  const subMenus = childrenArray.filter(
    (child) => isValidElement(child) && child.type === SubMenuType,
  );
  return subMenus;
};
const getTitle = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  const title = childrenArray.filter(
    (child) => isValidElement(child) && child.type === TitleType,
  );
  return title;
};

interface Props {
  onClick?: MouseEventHandler<HTMLDivElement>;
  children?: ReactNode;
}

function BarNavMenu({ children, onClick }: Props) {
  const subMenus = getSubMenus(children);
  const title = getTitle(children);

  const wrapperSize = subMenus.length === 0 ? 'small' : 'large';

  return (
    <Wrapper onClick={onClick} $size={wrapperSize}>
      {title}
      {subMenus && <SubMenuWrapper>{subMenus}</SubMenuWrapper>}
    </Wrapper>
  );
}

const SubMenuWrapper = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;
const Wrapper = styled.div<{ $size: 'small' | 'large' }>`
  ${({ $size }) => {
    switch ($size) {
      case 'small':
        return css`
          width: 80px;
        `;
      case 'large':
        return css`
          width: 150px;
        `;
      default:
        return css`
          width: 150px;
        `;
    }
  }};

  &:hover {
    ${SubMenuWrapper} {
      display: flex;
    }
  }
`;

BarNavMenu.SubMenu = SubMenu;
BarNavMenu.Title = Title;

export default BarNavMenu;
