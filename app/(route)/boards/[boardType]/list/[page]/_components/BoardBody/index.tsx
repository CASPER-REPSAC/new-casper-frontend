'use client';

import { useParams } from 'next/navigation';
import {
  Link,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';
import { ArticleData, BoardListParams } from '@app/_types/boardTypes';
import { LockIcon } from '@app/_components/icons';
import formateDate from '@app/_utils/formatDate';
import PageNav from './PageNav';

interface Props {
  articleList?: ArticleData[];
  maxPage: number;
}

function BoardBody({ articleList, maxPage }: Props) {
  const { boardType } = useParams<BoardListParams>();

  return (
    <Table
      removeWrapper
      aria-label="article table"
      color="primary"
      layout="fixed"
      selectionMode="single"
      bottomContent={
        <div className="flex-center">
          <PageNav maxPage={maxPage} />
        </div>
      }
    >
      <TableHeader>
        <TableColumn className="text-center" width={50}>
          번호
        </TableColumn>
        <TableColumn width={200}>제목</TableColumn>
        <TableColumn className="text-center" width={100}>
          작성자
        </TableColumn>
        <TableColumn className="text-center" width={100}>
          날짜
        </TableColumn>
        <TableColumn className="text-center" width={50}>
          조회수
        </TableColumn>
      </TableHeader>

      {!articleList || articleList.length === 0 ? (
        <TableBody emptyContent="게시글이 없어요">{[]}</TableBody>
      ) : (
        <TableBody>
          {articleList.map(
            ({ articleId, title, view, nickname, createdAt, hide }) => {
              const formattedDate = formateDate(createdAt);
              return (
                <TableRow
                  as={Link}
                  className="cursor-pointer"
                  href={`/boards/${boardType}/detail/${articleId}`}
                  key={articleId}
                >
                  <TableCell className="text-center">{articleId}</TableCell>
                  <TableCell className="flex items-center">
                    <span>
                      {hide && <LockIcon className="text-primary-300 mr-2" />}
                    </span>
                    <span className="truncate hover:text-clip">{title}</span>
                  </TableCell>
                  <TableCell className="text-center">{nickname}</TableCell>
                  <TableCell className="text-center">{formattedDate}</TableCell>
                  <TableCell className="text-center">{view}</TableCell>
                </TableRow>
              );
            },
          )}
        </TableBody>
      )}
    </Table>
  );
}

export default BoardBody;
