'use client';

import { ArticleData, BoardType } from 'app/_types/boardTypes';
import { styled } from 'styled-components';
import Article from './Article';

interface Props {
  boardType: BoardType;
  articleList: ArticleData[];
}

function BoardBody({ articleList, boardType }: Props) {
  return (
    <Table>
      <Thead>
        <Tr>
          <SmallTd>번호</SmallTd>
          <LargeTd>제목</LargeTd>
          <MediumTd>작성자</MediumTd>
          <MediumTd>날짜</MediumTd>
          <SmallTd>조회수</SmallTd>
        </Tr>
      </Thead>

      <Tbody>
        {articleList &&
          articleList.map(({ articleId, title, view, nickname, createdAt }) => (
            <Article
              key={articleId}
              articleId={articleId}
              boardType={boardType}
              title={title}
              view={view}
              nickname={nickname}
              createdAt={createdAt}
            />
          ))}
      </Tbody>
    </Table>
  );
}

const Table = styled.table`
  font-size: 1.6rem;
  width: 100%;
  margin-bottom: 1em;
  table-layout: fixed;
`;

const Thead = styled.thead`
  background-color: ${({ theme }) => theme.surfaceAlt};
  border-bottom: 1px solid ${({ theme }) => theme.borderDefault};
  border-top: 1px solid ${({ theme }) => theme.borderDefault};
  height: 2.4em;
  line-height: 2.4em;
`;
const Tbody = styled.tbody`
  font-size: 1.6rem;
`;

const Tr = styled.tr`
  height: 2.4em;
  line-height: 2.4em;
  border-bottom: 1px solid ${({ theme }) => theme.borderDefault};
`;

const SmallTd = styled.td`
  width: 10%;
  text-align: center;
`;
const MediumTd = styled.td`
  width: 20%;
  text-align: center;
`;
const LargeTd = styled.td`
  width: 19px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default BoardBody;
