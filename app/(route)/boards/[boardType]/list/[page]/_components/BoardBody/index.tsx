'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@app/_shadcn/components/ui/table';
import { ArticleData, BoardListParams } from '@app/_types/boardTypes';
import formateDate from '@app/_utils/formatDate';
import { BookOpen, MessageCircle, File } from 'lucide-react';
import { Tooltip, TooltipContent } from '@app/_shadcn/components/ui/tooltip';
import { TooltipTrigger } from '@app/_shadcn/components/plate-ui/tooltip';

interface Props {
  articleList?: ArticleData[];
}

function BoardBody({ articleList }: Props) {
  const { boardType } = useParams<BoardListParams>();

  return (
    <>
      <Table className="table-fixed" aria-label="article table">
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/12 text-center">번호</TableHead>
            <TableHead>제목</TableHead>
            <TableHead className="text-center">작성자</TableHead>
            <TableHead className="text-center">날짜</TableHead>
            <TableHead className="w-1/12 text-center">조회수</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {articleList?.map(
            ({
              articleId,
              title,
              view,
              nickname,
              createdAt,
              hide,
              numOfComments,
              file,
            }) => {
              const formattedDate = formateDate(createdAt);
              return (
                <Link
                  key={articleId}
                  href={`/boards/${boardType}/detail/${articleId}`}
                  legacyBehavior
                >
                  <TableRow key={articleId} className="cursor-pointer">
                    <TableCell className="text-center">{articleId}</TableCell>
                    <TableCell className="flex items-center">
                      <span className="flex-center">
                        {hide && (
                          <Tooltip>
                            <TooltipTrigger>
                              <BookOpen
                                className="mr-2 stroke-muted-foreground"
                                size={15}
                              />
                            </TooltipTrigger>
                            <TooltipContent>
                              해당 글은 정회원만 열람 가능해요.
                            </TooltipContent>
                          </Tooltip>
                        )}
                      </span>
                      <span className="truncate hover:text-clip">{title}</span>
                      <div className="ml-auto flex items-center gap-4 text-xs text-muted-foreground">
                        {numOfComments > 0 && (
                          <span className="flex items-center gap-1">
                            <MessageCircle size={14} />
                            {numOfComments}
                          </span>
                        )}
                        {file && (
                          <span>
                            <File size={14} />
                          </span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-center">{nickname}</TableCell>
                    <TableCell className="text-center">
                      {formattedDate}
                    </TableCell>
                    <TableCell className="text-center">{view}</TableCell>
                  </TableRow>
                </Link>
              );
            },
          )}
        </TableBody>
      </Table>
      {articleList?.length === 0 && (
        <div className="flex-center h-40">게시글이 없어요. 😭</div>
      )}
    </>
  );
}

export default BoardBody;
