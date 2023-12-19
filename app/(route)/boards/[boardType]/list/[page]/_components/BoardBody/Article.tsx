'use client';

import formateDate from 'app/_utils/formatDate';
import { useRouter } from 'next/navigation';

interface ArticleProps {
  articleId: number;
  title: string;
  view: number;
  nickname: string;
  createdAt: string;
  boardType: string;
}

function Article({
  articleId,
  boardType,
  title,
  view,
  nickname,
  createdAt,
}: ArticleProps) {
  const { prefetch, push } = useRouter();
  const href = `/boards/${boardType}/detail/${articleId}`;
  const formattedDate = formateDate(createdAt);

  return (
    <tr
      className="h-10 cursor-pointer 
      border-b border-solid border-slate-200 
      text-center 
      hover:bg-slate-100 
      dark:border-slate-700 
      dark:hover:bg-slate-900/50"
      onMouseEnter={() => prefetch(href)}
      onClick={() => push(href)}
    >
      <td className="align-middle">{articleId}</td>
      <td className="w-8/12 overflow-hidden overflow-ellipsis whitespace-nowrap text-left align-middle">
        {title}
      </td>
      <td className="align-middle">{nickname}</td>
      <td className="align-middle">{formattedDate}</td>
      <td className="align-middle">{view}</td>
    </tr>
  );
}

export default Article;
