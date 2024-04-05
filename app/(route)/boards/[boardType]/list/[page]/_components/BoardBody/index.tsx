import { BoardListParams } from '@app/_types/boardTypes';
import { getOnePageArticleList } from '@app/_service/article';
import Article from './Article';
import BoardBodySkeleton from './BoardBodySkeleton';

interface Props {
  params: BoardListParams;
}

async function BoardBody({ params: { boardType, page } }: Props) {
  const { articleList } = await getOnePageArticleList({ boardType, page });

  if (!articleList || articleList.length === 0)
    return <div className="flex-center h-24">작성된 게시글이 없어요.</div>;

  return (
    <table className="w-full table-fixed text-base">
      <thead
        className=" 
        hidden
        h-10
        border-b
      border-solid border-slate-300 bg-sky-100 
      font-bold 
      leading-10 dark:border-gray-600 
      dark:bg-slate-800 
      md:table-header-group
      "
      >
        <tr className="text-center">
          <td className="w-[7%]">번호</td>
          <td className="w-[35%]">제목</td>
          <td className="w-[10%]">작성자</td>
          <td className="w-[15%]">날짜</td>
          <td className="w-[10%]">조회수</td>
        </tr>
      </thead>

      <tbody>
        {articleList &&
          articleList.map(
            ({ articleId, title, view, nickname, createdAt, hide }) => (
              <Article
                key={articleId}
                articleId={articleId}
                boardType={boardType}
                title={title}
                view={view}
                nickname={nickname}
                createdAt={createdAt}
                hide={hide}
              />
            ),
          )}
      </tbody>
    </table>
  );
}

BoardBody.Skeleton = BoardBodySkeleton;

export default BoardBody;
