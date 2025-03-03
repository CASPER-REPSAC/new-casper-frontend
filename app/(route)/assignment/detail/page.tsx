import assignmentService from '@app/_service/assignmentService';
import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from '@tanstack/react-query';
import AssignmentDetail from './_components/AssignmentDetail';
import SubmitList from './_components/SubmitList';

export default async function AssignmentDetailPage(props: {
  searchParams: Promise<{ assignmentId: string }>;
}) {
  const searchParams = await props.searchParams;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['assignment', 'detail', Number(searchParams.assignmentId)],
    queryFn: () =>
      assignmentService.getAssignmentDetail(Number(searchParams.assignmentId)),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="container mx-auto px-4 py-12">
        <AssignmentDetail assignmentId={Number(searchParams.assignmentId)} />
        <SubmitList />
      </div>
    </HydrationBoundary>
  );
}
