import SideBar from "../../components/SideBar";
import styled from "styled-components";
import PageTitle from "../../components/PageTitle";
import { useRouter } from "next/router";
import PageWrapper from "@src/components/PageWrapper";

const Main = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Cards = styled.div`
  margin-left: 30px;
  margin-right: 30px;
  height: 23vw;
  width: 100%;
  display: grid;
  gap: 3px;
  grid-template-columns: repeat(6, 1fr);
  box-sizing: border-box;
`;
const MemberCard = styled.div`
  transform: skewX(-18deg);
  height: 100%;
  width: 100%;

  background-color: ${(props) => props.theme.color1};
  opacity: 0.4;
  margin: 0;
`;

function Members() {
  const router = useRouter();

  return (
    <PageWrapper>
      <PageTitle pageTitle="Members" />
      <SideBar menus={["활동 중", "휴학생", "졸업생"]} basePath="/members" />
      <Main>
        <Cards>
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
        </Cards>
      </Main>
    </PageWrapper>
  );
}

export default Members;
