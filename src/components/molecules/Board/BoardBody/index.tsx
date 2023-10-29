import { ArticleData } from '@src/types/articleTypes';
import { PATH } from '@src/utils/urls';
import { useRouter } from 'next/router';
import { styled } from 'styled-components';

interface Props {
  articleList: ArticleData[] | null;
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
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
          <th>날짜</th>
          <th>조회수</th>
        </Tr>
      </Thead>

      <Tbody>
        {articleList &&
          articleList.map(
            ({ article_id, title, view, nickname, created_at }) => (
              <Article
                key={article_id}
                articleId={article_id}
                title={title}
                view={view}
                nickname={nickname}
                createdAt={created_at}
              />
            ),
          )}
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
      <TdCenter>{articleId}</TdCenter>
      <td>{title}</td>
      <TdCenter>{nickname}</TdCenter>
      <TdCenter>{createDate}</TdCenter>
      <TdCenter>{view}</TdCenter>
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
const TdCenter = styled.td`
  text-align: center;
`;

export default BoardBody;
