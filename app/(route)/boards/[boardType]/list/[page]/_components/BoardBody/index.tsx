'use client';

import { ArticleData, BoardListParams } from '@app/_types/boardTypes';
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
import { LockIcon } from '@app/_components/icons';
import formateDate from '@app/_utils/formatDate';
import BoardBodySkeleton from './BoardBodySkeleton';

interface Props {
  articleList?: ArticleData[];
}

function BoardBody({ articleList }: Props) {
  const { boardType } = useParams<BoardListParams>();

  return (
    <Table layout="auto" color="default" selectionMode="single">
      <TableHeader>
        <TableColumn align="center">번호</TableColumn>
        <TableColumn>제목</TableColumn>
        <TableColumn>작성자</TableColumn>
        <TableColumn>날짜</TableColumn>
        <TableColumn align="center">조회수</TableColumn>
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
                  <TableCell align="center">{articleId}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      {hide && <LockIcon className="mr-2 text-primary-300" />}
                      {title}
                    </div>
                  </TableCell>
                  <TableCell>{nickname}</TableCell>
                  <TableCell>{formattedDate}</TableCell>
                  <TableCell>{view}</TableCell>
                </TableRow>
              );
            },
          )}
        </TableBody>
      )}
    </Table>
  );
}

BoardBody.Skeleton = BoardBodySkeleton;

export default BoardBody;
