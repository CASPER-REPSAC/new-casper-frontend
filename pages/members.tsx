import SideBar from "@/components/SideBar";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
`;
const Body = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 100px 160px 0 160px;
  width: 100vw;
  box-sizing: border-box;
  @media screen and (max-width: 1300px) {
    padding: 50px 40px 0 40px;
  }
`;
const Cards = styled.div`
  margin-left: 30px;
  margin-right: 30px;
  height: 23vw;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  box-sizing: border-box;
`;
const MemberCard = styled.div`
  transform: skewX(-18deg);
  height: 100%;
  width: 100%;
  border-right: 1px solid #787d82;
  border-left: 1px solid #787d82;
  background-color: ${(props) => props.theme.color1};
  opacity: 0.4;
  margin: 0;
`;

function Members() {
  return (
    <>
      <Header />
      <Wrapper>
        <PageTitle pageTitle="Members" />
        <Body>
          <SideBar menus={["활동", "휴학생", "졸업생"]} />
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
        </Body>
      </Wrapper>
    </>
  );
}

export default Members;
