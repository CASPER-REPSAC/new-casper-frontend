'use client';

import { cn } from '@udecode/cn';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { Fragment } from 'react';
import { NEW_PATH } from '@app/_constants/urls';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@app/_shadcn/components/ui/bread-crumb';

function AssignmentBreadcrumb() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const assignmentId = Number(searchParams.get('assignmentId'));
  const submitId = Number(searchParams.get('submitId'));

  const isDetailPage = pathname.startsWith('/assignment/detail');
  const isSubmitCreatePage = pathname.startsWith('/assignment/submit/create');
  const isSubmitEditPage = pathname.startsWith('/assignment/submit/edit');
  const isSubmitDetailPage = pathname.startsWith('/assignment/submit/detail');
  const isListPage = pathname === '/assignment';

  const breadcrumbItems: {
    key: string;
    label: string;
    href: string;
    isVisible: boolean;
    isActive: boolean;
  }[] = [
    {
      key: 'home',
      label: '홈',
      href: NEW_PATH.home.url,
      isVisible: true,
      isActive: false,
    },
    {
      key: 'list',
      label: '과제 목록',
      href: '/assignment',
      isVisible: true,
      isActive: isListPage,
    },
    {
      key: 'detail',
      label: `과제 #${assignmentId}`,
      href: `/assignment/detail?assignmentId=${assignmentId}`,
      isVisible:
        isDetailPage ||
        isSubmitDetailPage ||
        isSubmitCreatePage ||
        isSubmitEditPage,
      isActive: isDetailPage,
    },
    {
      key: 'submitCreate',
      label: '과제 제출',
      href: NEW_PATH.submitCreate.url({ assignmentId: Number(assignmentId) }),
      isVisible: isSubmitCreatePage,
      isActive: isSubmitCreatePage,
    },
    {
      key: 'submitDetail',
      label: `제출 #${submitId}`,
      href: NEW_PATH.submitDetail.url({
        assignmentId: Number(assignmentId),
        submitId: Number(submitId),
      }),
      isVisible: isSubmitDetailPage || isSubmitEditPage,
      isActive: isSubmitDetailPage,
    },
    {
      key: 'submitEdit',
      label: '제출 수정',
      href: NEW_PATH.submitEdit.url({ assignmentId, submitId }),
      isVisible: isSubmitEditPage,
      isActive: isSubmitEditPage,
    },
  ].filter((item) => item.isVisible);

  return (
    <Breadcrumb className="flex-center my-8">
      <BreadcrumbList>
        {breadcrumbItems.map((item, index) => (
          <Fragment key={item.key}>
            <BreadcrumbItem key={item.label}>
              <BreadcrumbLink
                asChild
                className={cn(item.isActive && 'text-black font-bold')}
              >
                <Link href={item.href}>{item.label}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index < breadcrumbItems.length - 1 && <BreadcrumbSeparator />}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
export default AssignmentBreadcrumb;
