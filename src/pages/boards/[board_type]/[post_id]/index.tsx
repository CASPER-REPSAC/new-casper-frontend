import PageTitle from '@src/components/Layout/PageTitle/PageTitle';
import CommonCenterWrapper from '@src/components/Layout/CommonCenterWrapper/CommonCenterWrapper';
import SideBar from '@src/components/Layout/SideBar/SideBar';
import Comment from '@src/components/Editor/Comment';
import {
  AuthorInfo,
  AuthorName,
  Avatar,
  Desc,
  H1,
  Hr,
  Info,
  Main,
} from './post_id.style';
import axios from 'axios';
import { useEffect, useState } from 'react';
import router from 'next/router';
import { type } from 'os';
/**
 *  글 조회 페이지
 */

function PostDetail() {
  const { board_type } = router.query;
  const typeboard = { board_type }.board_type;
  // const contentIndex = {board_type}.
  const sideBarParmas = {
    공지사항: '/boards/notice_board',
    '정회원 게시판': '/boards/full_member_board',
    '준회원 게시판': '/boards/associate_member_board',
  };
  const [contentData, SetcontentData] = useState([]);
  useEffect(() => {
    const showcontent = async () => {
      await axios
        .get('/api/article/boards/' + typeboard + '/' + '0' + '/' + '5')
        .then((res) => {
          SetcontentData(res.data);
        });
    };
    showcontent();
  }, []);
  return (
    <>
      <PageTitle pageTitle={'Boards'} />
      <CommonCenterWrapper>
        <SideBar menu_path={sideBarParmas} />
        <Main>
          {/* 본문 */}

          {/* 작성자 정보 */}
          <AuthorInfo>
            <Avatar></Avatar>
            <Info>
              <AuthorName>{contentData.title}</AuthorName>
              <Desc>test</Desc>
            </Info>
          </AuthorInfo>
          <Hr />

          {/* 댓글 */}
          <H1>댓글</H1>
          <Comment
            name="박지성"
            date="2021.12.12 14:12:15"
            content="댓글 1번입니다."
          ></Comment>
          <Comment
            name="박지성"
            date="2021.12.12 14:12:15"
            content="댓글 2번입니다."
          ></Comment>
        </Main>
      </CommonCenterWrapper>
    </>
  );
}

export default PostDetail;
