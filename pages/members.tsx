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
`;
const Cards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  box-sizing: border-box;
`;
const MemberCard = styled.div`
  transform: skewX(-15deg);
  height: 14vw;
  width: 100%;
  border-right: 1px solid #787d82;
  border-left: 1px solid #787d82;
  background-color: ${(props) => props.theme.color1};
  margin: 0;
`;
const Nav = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 230px;
  height: 400px;
  border: 1px red solid;
  margin-right: 50px;
`;

function Members() {
  return (
    <Wrapper>
      <PageTitle pageTitle="Members" />
      <Body>
        <Nav></Nav>
        <Cards>
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
        </Cards>
      </Body>
    </Wrapper>
  );
}

export default Members;
