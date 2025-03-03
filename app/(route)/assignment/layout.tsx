import { Suspense } from 'react';
import Skeleton from '@app/_components/common/Skeleton';

function AssignmentLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Suspense
        fallback={
          <div className="flex-center my-8">
            <Skeleton className="h-6 w-32 rounded-full" />
          </div>
        }
      >
        {children}
      </Suspense>
    </>
  );
}
export default AssignmentLayout;
