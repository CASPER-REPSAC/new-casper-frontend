import { useRouter } from 'next/router';
import styled from 'styled-components';
import SideMenuLink from '@src/components/common/SideMenuLink';
import { PATH } from '@src/utils/urls';

function MemberSideMenu() {
  const { asPath } = useRouter();
  const { active, rest, graduate } = PATH.members;

  return (
    <Wrapper>
      <SideMenuLink
        href={active.url}
        name={active.name}
        highlight={asPath.startsWith(active.url)}
      />
      <SideMenuLink
        href={rest.url}
        name={rest.name}
        highlight={asPath.startsWith(rest.url)}
      />
      <SideMenuLink
        href={graduate.url}
        name={graduate.name}
        highlight={asPath.startsWith(graduate.url)}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: inline;
  flex-direction: column;
  float: left;
  height: 100%;
  min-width: 230px;
  width: 230px;
  margin-right: 50px;
`;

export default MemberSideMenu;
