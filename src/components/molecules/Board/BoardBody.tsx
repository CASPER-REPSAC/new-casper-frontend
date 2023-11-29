import { useOnePageArticleList } from '@src/hooks/apis/boards';
import { Variants, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { styled } from 'styled-components';
import { DefaultTheme } from 'styled-components/dist/types';

interface Props {
  boardType: string;
  page: string;
}

interface ArticleProps {
  articleId: number;
  title: string;
  view: number;
  nickname: string;
  createdAt: string;
}

function BoardBody({ boardType, page }: Props) {
  const { data } = useOnePageArticleList({ boardType, page });

  if (!data) return <></>;

  const { articleList } = data;

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
  const { query, prefetch, push } = useRouter();
  const [createDate] = createdAt.split('T');
  const href = `/boards/${query.boardType}/detail/${articleId}`;

  return (
    <MotionTr onMouseEnter={() => prefetch(href)} onClick={() => push(href)}>
      <SmallTd>{articleId}</SmallTd>
      <LargeTd>{title}</LargeTd>
      <MediumTd>{nickname}</MediumTd>
      <MediumTd>{createDate}</MediumTd>
      <SmallTd>{view}</SmallTd>
    </MotionTr>
  );
}

const trVariants: Variants = {
  hover: (theme: DefaultTheme) => ({
    backgroundColor: theme.boardHover,
  }),
  tap: (theme: DefaultTheme) => ({
    backgroundColor: theme.boardActive,
  }),
};

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

const MotionTr = styled(motion(Tr)).attrs(({ theme }) => ({
  variants: trVariants,
  whileHover: 'hover',
  whileTap: 'tap',
  custom: theme,
}))`
  cursor: pointer;
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
