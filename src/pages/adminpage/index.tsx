import { Wrapper, SideBar, SideBarRow, SideTitle } from './adminpage.style';

export default function Login() {
  return (
    <Wrapper>
      <SideBar>
        <SideBarRow>
          <SideTitle>대시보드</SideTitle>
        </SideBarRow>
        <SideBarRow>
          <SideTitle>사용자관리</SideTitle>
        </SideBarRow>
      </SideBar>
      관리자 페이지 입니다
    </Wrapper>
  );
}
