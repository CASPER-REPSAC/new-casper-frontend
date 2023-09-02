import PageTitle from '@src/components/common/PageTitle';
import CommonCenterWrapper from '@src/components/common/Layout/CommonCenterWrapper';
import SideBar from '@src/components/common/SideBar';
import Comment from '@src/components/Editor/Comment';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { PATH } from '@src/utils/urls';
/**
 *  글 조회 페이지
 */

interface contentResponse {
  id: number;
  title: string;
  content: string;
  author: string;
  created_at: string;
  views: number;
  attachment_count: number;
  attachments: [
    {
      id: number;
      filename: string;
      url: string;
    },
  ];
  comment_count: number;
  comments: [
    {
      id: number;
      author: string;
      created_at: string;
      content: string;
    },
  ];
}
function PostDetail() {
  const [contentData, SetcontentData] = useState<contentResponse | null>(null);
  const idx = '1';
  useEffect(() => {
    const showcontent = async () => {
      await axios
        .post('/api/article/boards/' + 'notice_board' + '/' + '0' + '/' + idx)
        .then((res) => {
          SetcontentData(res.data);
        });
    };
    showcontent();
  }, [idx]);

  if (!contentData) return <> 서버 응답 없음 </>;

  return (
    <>
      <PageTitle pageTitle={'Boards'} />
      <CommonCenterWrapper>
        <SideBar menus={PATH.boards} />
        <Main>
          {/* 본문 */}
          <Title>test</Title>
          {/* 작성자 정보 */}
          <AuthorInfo>
            <Avatar></Avatar>
            <Info>
              <AuthorName>{contentData.title}</AuthorName>
              <Desc>{contentData.content}</Desc>
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

import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 200px;
`;
const Hr = styled.hr`
  background: ${({ theme }) => theme.borderDefault};
  border: 0;
  width: 100%;
  height: 1px;
  margin-top: 50px;

  margin-bottom: 50px;
`;
const AuthorInfo = styled.div`
  display: flex;
  margin-top: 200px;
  align-items: center;
`;
const Avatar = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ theme }) => theme.borderDefault};
  margin-right: 50px;
`;
const Info = styled.div`
  display: flex;

  flex-direction: column;
`;
const AuthorName = styled.h1`
  font-size: 2.4rem;
  margin-bottom: 0.5em;
`;
const Desc = styled.div`
  font-size: 2rem;
`;

const H1 = styled.h1`
  font-size: 3rem;
  margin-bottom: 1em;
`;
const Title = styled.h1`
  font-size: 600%;
`;

export default PostDetail;
