import SideBar from "../../components/SideBar";
import styled from "styled-components";
import PageTitle from "../../components/PageTitle";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
`;
const Main = styled.div`
  padding: 0 160px 0 160px;
  width: 100vw;
  box-sizing: border-box;
  @media screen and (max-width: 1440px) {
    padding: 0 40px 0 40px;
  }
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
  router.push("/members/active");

  return <Wrapper></Wrapper>;
}

export default Members;
