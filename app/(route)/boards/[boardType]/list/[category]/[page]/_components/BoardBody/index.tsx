'use client';

import { BookOpen, MessageCircle, File } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import useArticleListQuery from '@app/_hooks/apis/boards/useArticleListQuery';
import formateDate from '@app/_utils/formatDate';
import { BoardListParams } from '@app/_types/boardTypes';
import { Badge } from '@app/_shadcn/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@app/_shadcn/components/ui/table';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@app/_shadcn/components/ui/tooltip';

function BoardBody() {
  const params = useParams<BoardListParams>();
  const { data } = useArticleListQuery({
    boardType: params.boardType,
    page: Number(params.page),
    category: params.category,
  });

  if (!data || data.items.length === 0)
    return <div className="flex-center h-40">게시글이 없어요. 😭</div>;

  const { items: articleList } = data;
  return (
    <Table aria-label="article table">
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">번호</TableHead>
          <TableHead>제목</TableHead>
          <TableHead className="text-center">작성자</TableHead>
          <TableHead className="hidden text-center lg:table-cell">
            날짜
          </TableHead>
          <TableHead className="hidden text-center lg:table-cell">
            조회수
          </TableHead>
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
            category,
          }) => {
            const formattedDate = formateDate(createdAt);
            return (
              <Link
                key={articleId}
                href={`/boards/${params.boardType}/detail/${articleId}`}
                legacyBehavior
              >
                <TableRow key={articleId} className="cursor-pointer">
                  <TableCell className="text-center">{articleId}</TableCell>
                  <TableCell className="flex items-center">
                    {category !== 'all' && (
                      <Badge variant="secondary" className="mr-2 shrink-0">
                        {category}
                      </Badge>
                    )}

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
                  <TableCell className="truncate text-center">
                    {nickname}
                  </TableCell>
                  <TableCell className="hidden text-center lg:table-cell">
                    {formattedDate}
                  </TableCell>
                  <TableCell className="hidden text-center lg:table-cell">
                    {view}
                  </TableCell>
                </TableRow>
              </Link>
            );
          },
        )}
      </TableBody>
    </Table>
  );
}

export default BoardBody;
