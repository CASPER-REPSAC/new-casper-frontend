import styled from "styled-components";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineCopyrightCircle,
} from "react-icons/ai";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.color2};
  color: white;
`;

const Sns = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 160px;
  width: 100px;
  @media screen and (max-width: 1440px) {
    margin-left: 40px;
  }
`;
const Info = styled.div`
  margin-right: 160px;
  font-size: 1rem;
  font-weight: lighter;
  display: flex;
  text-align: right;
  flex-direction: column;
  @media screen and (max-width: 1440px) {
    margin-right: 40px;
  }
`;
const Span = styled.span`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

function Footer() {
  return (
    <Wrapper>
      <Sns>
        <AiOutlineGithub size={30} />
        <AiOutlineFacebook size={30} />
        <AiOutlineInstagram size={30} />
      </Sns>
      <Info>
        <Span>창원대학교 51호관 113호</Span>
        <Span>
          <AiOutlineCopyrightCircle />
          2023. Casper All rights reserved.
        </Span>
      </Info>
    </Wrapper>
  );
}

export default Footer;
