import styled from 'styled-components';

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

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 90%;
`;
const SideBar = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  width: 30%;
  height: 100%;
  background-color: ${({ theme }) => theme.borderDefault};
  overflow: scroll;
  // justify-content:center;
  flex-direction: column;
`;
const SideBarRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 2px #808e9b;
  width: 100%;
`;
const SideTitle = styled.h1`
  padding: 0.7em;
`;
