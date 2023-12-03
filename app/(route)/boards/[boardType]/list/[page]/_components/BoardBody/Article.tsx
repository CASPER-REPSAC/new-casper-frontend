import { motion } from 'framer-motion';
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
  const formattedDate = new Date(createdAt).toLocaleString('ko-KR', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
  });

  return (
    <motion.tr
      className="h-10 cursor-pointer border-b border-solid border-gray-600 text-center leading-10 hover:bg-gray-700"
      onMouseEnter={() => prefetch(href)}
      onClick={() => push(href)}
    >
      <td>{articleId}</td>
      <td className="w-8/12 overflow-hidden overflow-ellipsis whitespace-nowrap text-left">
        {title}
      </td>
      <td>{nickname}</td>
      <td>{formattedDate}</td>
      <td>{view}</td>
    </motion.tr>
  );
}

export default Article;
