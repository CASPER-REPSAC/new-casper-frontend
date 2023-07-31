import { isDarkState } from '@src/atoms';
import { useForm } from 'react-hook-form';
import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai';
import { useRecoilValue } from 'recoil';
import { useState } from 'react';
import {
  Wrapper,
  SideBar,
  SideBarRow,
  SideTitle,
} from './adminpage.style';

export default function Login() {
  const isDark = useRecoilValue(isDarkState);
  const [isUserOpen, setUserOpen] = useState(false);

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
      {/* 1. 게시판 관리
        1-1. 게시판별 카테고리 관리
      2. 게시물, 댓글관리
      3. 회원권한관리 */}
    </Wrapper>
  );
}
