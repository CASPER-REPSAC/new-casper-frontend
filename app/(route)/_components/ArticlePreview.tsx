import { DefaultButton } from 'app/_components/common';
import { RightArrowIcon } from 'app/_components/icons';
import { PATH } from 'app/_constants/urls';
import { ArticleData } from 'app/_types/boardTypes';
import formateDate from 'app/_utils/formatDate';
import Link from 'next/link';

interface Props {
  articleList: ArticleData[];
}

async function ArticlePreview({ articleList }: Props) {
  const slicedArticleList = articleList.slice(0, 5);

  return (
    <div className="w-96 text-left">
      <div className="mb-2 flex items-center justify-between border-b border-solid border-slate-600">
        <h1 className="text-lg font-bold">공지사항</h1>
        <DefaultButton size="sm">
          <div className="flex items-center">
            전체보기 <RightArrowIcon />
          </div>
        </DefaultButton>
      </div>
      <ul className="">
        {slicedArticleList.map((article) => {
          const formattedDate = formateDate(article.createdAt);
          return (
            <li key={article.articleId}>
              <Link
                className="flex justify-between gap-2"
                href={`${PATH.boards.notice.url}/detail/${article.articleId}`}
              >
                <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                  {article.title}
                </div>
                <span className="flex-shrink-0 text-sm font-thin">
                  {formattedDate}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ArticlePreview;
