import HeaderMenu from '@src/components/common/HeaderMenu';
import HeaderSubMenu from '@src/components/common/HeaderSubMenu';
import { PATH } from '@src/utils/urls';
import { MouseEventHandler } from 'react';
import styled from 'styled-components';

interface Props {
  onMouseOver: MouseEventHandler<HTMLDivElement>;
  onMouseOut: MouseEventHandler<HTMLDivElement>;
}

function NavItems({ onMouseOver, onMouseOut }: Props) {
  return (
    <Wrapper onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
      <HeaderMenu title="Members">
        <HeaderSubMenu>
          <HeaderSubMenu.Item href={PATH.members.active.url}>
            {PATH.members.active.name}
          </HeaderSubMenu.Item>
          <HeaderSubMenu.Item href={PATH.members.rest.url}>
            {PATH.members.rest.name}
          </HeaderSubMenu.Item>
          <HeaderSubMenu.Item href={PATH.members.graduate.url}>
            {PATH.members.graduate.name}
          </HeaderSubMenu.Item>
        </HeaderSubMenu>
      </HeaderMenu>

      <HeaderMenu title="Boards">
        <HeaderSubMenu>
          <HeaderSubMenu.Item href={PATH.boards.notice.url}>
            {PATH.boards.notice.name}
          </HeaderSubMenu.Item>
          <HeaderSubMenu.Item href={PATH.boards.full.url}>
            {PATH.boards.full.name}
          </HeaderSubMenu.Item>
          <HeaderSubMenu.Item href={PATH.boards.associate.url}>
            {PATH.boards.associate.name}
          </HeaderSubMenu.Item>
          <HeaderSubMenu.Item href={PATH.boards.graduate.url}>
            {PATH.boards.graduate.name}
          </HeaderSubMenu.Item>
        </HeaderSubMenu>
      </HeaderMenu>

      <HeaderMenu title="Intranet">
        <HeaderSubMenu>
          <HeaderSubMenu.Item href={PATH.extra.nas.url}>
            {PATH.extra.nas.name}
          </HeaderSubMenu.Item>
          <HeaderSubMenu.Item href={PATH.extra.recruit.url}>
            {PATH.extra.recruit.name}
          </HeaderSubMenu.Item>
          <HeaderSubMenu.Item href={PATH.extra.wiki.url}>
            {PATH.extra.wiki.name}
          </HeaderSubMenu.Item>
        </HeaderSubMenu>
      </HeaderMenu>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
`;

export default NavItems;
