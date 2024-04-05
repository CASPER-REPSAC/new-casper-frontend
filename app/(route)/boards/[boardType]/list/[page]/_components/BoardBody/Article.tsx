'use client';

import { LockIcon } from '@app/_components/icons';
import formateDate from '@app/_utils/formatDate';
import { useRouter } from 'next/navigation';

interface ArticleProps {
  articleId: number;
  title: string;
  view: number;
  nickname: string;
  createdAt: string;
  boardType: string;
  hide: boolean;
}
const CLASS_NAME = {
  tr: `relative
  flex
  cursor-pointer
  border-b
  border-solid
  border-slate-200
  px-4
  pb-2
  pt-10
  text-center
  hover:bg-slate-100
  dark:border-slate-700
  dark:hover:bg-slate-900/50
  md:table-row
  md:h-10
  md:p-0
  
  `,

  mainTd:
    'absolute top-2 w-8/12 overflow-hidden overflow-ellipsis whitespace-nowrap text-left align-middle text-lg md:static',
  subTd: 'block pr-8 md:pr-0 align-middle opacity-80 md:table-cell ',
};

function Article({
  articleId,
  boardType,
  title,
  view,
  nickname,
  createdAt,
  hide,
}: ArticleProps) {
  const { prefetch, push } = useRouter();
  const href = `/boards/${boardType}/detail/${articleId}`;
  const formattedDate = formateDate(createdAt);

  return (
    <tr
      className={CLASS_NAME.tr}
      onMouseEnter={() => prefetch(href)}
      onClick={() => push(href)}
    >
      <td className={CLASS_NAME.subTd}>{articleId}</td>
      <td className={CLASS_NAME.mainTd}>
        <div className="flex items-center">
          {title}
          {hide && <LockIcon className="ml-auto text-primary-300" />}
        </div>
      </td>
      <td className={CLASS_NAME.subTd}>{nickname}</td>
      <td className={CLASS_NAME.subTd}>{formattedDate}</td>
      <td className={CLASS_NAME.subTd}>{view}</td>
    </tr>
  );
}

export default Article;
