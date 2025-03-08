import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@app/_shadcn/components/ui/pagination';
import { cn } from '@app/_shadcn/lib/utils';

interface Props {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;

  pageInterval?: number;
  replace?: boolean;
  getHref?: (page: number) => string;
  className?: string;
}

export default function CommonPagination({
  totalItems,
  currentPage,
  getHref,
  itemsPerPage,
  pageInterval = 5,
  replace = true,
  className = '',
}: Props) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const maxGroupIndex = Math.ceil(totalPages / pageInterval) - 1;

  const groupIndex = Math.floor((currentPage - 1) / pageInterval);

  const start = groupIndex * pageInterval + 1;
  const end = Math.min(start + pageInterval - 1, totalPages);
  const pageLabelList = Array.from(
    { length: end - start + 1 },
    (_, i) => start + i,
  );

  const prevActive = groupIndex > 0;
  const nextActive = groupIndex < maxGroupIndex;

  const prevHref = prevActive ? (getHref?.(start - 1) ?? '') : '';
  const nextHref = nextActive ? (getHref?.(end + 1) ?? '') : '';

  return (
    <Pagination className={className}>
      <PaginationContent>
        <PaginationPrevious
          replace={replace}
          href={prevHref}
          className={cn(!prevActive && 'text-slate-300 pointer-events-none')}
        />

        {pageLabelList.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              replace={replace}
              isActive={page === currentPage}
              href={getHref?.(page) ?? ''}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationNext
          replace={replace}
          href={nextHref}
          className={cn(!nextActive && 'text-slate-300 pointer-events-none')}
        />
      </PaginationContent>
    </Pagination>
  );
}
