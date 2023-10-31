import { ArticleData } from '@src/types/articleTypes';
import { PATH } from '@src/utils/urls';
import { useRouter } from 'next/router';
import { styled } from 'styled-components';

interface Props {
  articleList: ArticleData[] | undefined;
}

interface ArticleProps {
  articleId: number;
  title: string;
  view: number;
  nickname: string;
  createdAt: string;
}

function BoardBody({ articleList }: Props) {
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

function Article({
  articleId,
  title,
  view,
  nickname,
  createdAt,
}: ArticleProps) {
  const router = useRouter();

  const [createDate] = createdAt.split('T');
  const redirectToDetailPage = () => {
    router.push(`${PATH.boards.notice.url}/detail/${articleId}`);
  };

  return (
    <Tr key={articleId} onClick={redirectToDetailPage}>
      <SmallTd>{articleId}</SmallTd>
      <LargeTd>{title}</LargeTd>
      <MediumTd>{nickname}</MediumTd>
      <MediumTd>{createDate}</MediumTd>
      <SmallTd>{view}</SmallTd>
    </Tr>
  );
}

const Table = styled.table`
  font-size: 1.6rem;
  width: 100%;
  margin-bottom: 1em;
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
  tr:hover td {
    cursor: pointer;
    background-color: ${({ theme }) => theme.boardHover};
  }
  tr:active td {
    cursor: pointer;
    background-color: ${({ theme }) => theme.boardActive};
  }
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
  width: 30%;
`;

export default BoardBody;
