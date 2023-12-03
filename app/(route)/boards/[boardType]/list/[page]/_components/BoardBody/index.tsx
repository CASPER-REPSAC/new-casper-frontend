'use client';

import { ArticleData, BoardType } from 'app/_types/boardTypes';
import Article from './Article';

interface Props {
  boardType: BoardType;
  articleList: ArticleData[];
}

function BoardBody({ articleList, boardType }: Props) {
  return (
    <table className="w-full table-fixed text-base">
      <thead className="h-10  border-b-[1px] border-solid border-gray-300 bg-gray-900 font-bold leading-10">
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
      </tbody>
    </table>
  );
}

export default BoardBody;
