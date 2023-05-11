import { isDarkState } from "@src/atoms";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import NavItem from "./NavItem";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { SlLogin } from "react-icons/sl";
import { AiOutlineUser } from "react-icons/ai";

const Wrapper = styled.div`
  position: relative;
  top: 0;
  width: 100vw;
  height: 70px;
  line-height: 70px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  background-color: rgba(255, 255, 255, 0);
  z-index: 10;
  font-size: 2rem;
`;
const Body = styled.div`
  display: flex;
  align-items: center;
  margin-left: 160px;
  margin-right: 160px;
  justify-content: space-between;

  @media screen and (max-width: 1440px) {
    margin-left: 40px;
    margin-right: 40px;
  }
`;
const Img = styled.img`
  width: 170px;
  height: 36px;
  cursor: pointer;
`;
const Items = styled.div`
  display: flex;
  align-items: center;
`;

const DarkModeButton = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 20px;
  left: 20px;
`;

interface headerProps {
  bgColor?: string;
}

export default function Header({ bgColor }: headerProps) {
  const [isDark, setIsDark] = useRecoilState(isDarkState);
  const router = useRouter();
  const isHome = router.pathname === "/";
  const isDarkHome = isDark || isHome;
  const basePath = router.pathname.split("/")[1];

  const goHome = () => {
    router.push("/");
  };

  return (
    <Wrapper>
      <Body>
        {/* 좌측 Logo */}
        {isDarkHome ? (
          <Img src="/casper_logo_white.png" onClick={goHome} />
        ) : (
          <Img src="/casper_logo_black.png" onClick={goHome} />
        )}

        <Items>
          {/* 네비게이션 */}
          <NavItem
            path="/members/active"
            menus={["활동 중", "휴학생", "졸업생"]}
            menus_url={[
              "/members/active",
              "/members/rest",
              "/members/graduate",
            ]}
          >
            Members
          </NavItem>
          <NavItem
            path="/album"
            menus={["2023", "2022", "2021"]}
            menus_url={["/album/2023", "/album/2022", "/album/2021"]}
          >
            Album
          </NavItem>
          <NavItem
            path="/boards/notice_board"
            menus={["공지사항", "정회원 게시판", "준회원 게시판"]}
            menus_url={[
              "/boards/notice_board",
              "/boards/full_member_board",
              "/boards/associate_member_board",
            ]}
          >
            Boards
          </NavItem>
          <NavItem
            menus={["Nas", "Wiki", "Recruit"]}
            atag_url={[
              "https://nas.casper.or.kr/",
              "https://www.casper.or.kr/dokuwiki/doku.php",
              "https://recruit.casper.or.kr/",
            ]}
          >
            Intranet
          </NavItem>
          <NavItem path="/login">
            <SlLogin color={isDarkHome ? "white" : "black"} size={20}></SlLogin>
          </NavItem>
          <NavItem path="/mypage">
            <AiOutlineUser
              color={isDarkHome ? "white" : "black"}
              size={24}
            ></AiOutlineUser>
          </NavItem>
        </Items>
      </Body>
      {/* 다크모드 버튼 (임시)*/}
      <DarkModeButton onClick={() => setIsDark((cur) => !cur)}>
        {isDark ? (
          <BsFillMoonFill></BsFillMoonFill>
        ) : (
          <BsFillSunFill color={isHome ? "white" : "black"}></BsFillSunFill>
        )}
      </DarkModeButton>
    </Wrapper>
  );
}
