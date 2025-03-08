import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
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
        <PaginationItem>
          <Link
            replace={replace}
            className={cn(!prevActive && 'text-slate-300 pointer-events-none')}
            href={prevHref}
          >
            <ChevronLeft />
          </Link>
        </PaginationItem>

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

        <PaginationItem>
          <Link
            replace={replace}
            className={cn(!nextActive && 'text-slate-300 pointer-events-none')}
            href={nextHref}
          >
            <ChevronRight />
          </Link>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
