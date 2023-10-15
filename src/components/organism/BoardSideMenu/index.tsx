import { useRouter } from 'next/router';
import styled from 'styled-components';
import SideMenuLink from '@src/components/common/SideMenuLink';
import { PATH } from '@src/utils/urls';

function BoardSideMenu() {
  const { asPath } = useRouter();
  const { notice, full, associate, graduate } = PATH.boards;

  return (
    <Wrapper>
      <SideMenuLink
        href={`${notice.url}/1`}
        name={notice.name}
        highlight={asPath.startsWith(notice.url)}
      />
      <SideMenuLink
        href={`${full.url}/1`}
        name={full.name}
        highlight={asPath.startsWith(full.url)}
      />
      <SideMenuLink
        href={`${associate.url}/1`}
        name={associate.name}
        highlight={asPath.startsWith(associate.url)}
      />
      <SideMenuLink
        href={`${graduate.url}/1`}
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

export default BoardSideMenu;
