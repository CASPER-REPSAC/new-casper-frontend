import assignmentService from '@app/_service/assignmentService';
import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from '@tanstack/react-query';
import AssignmentDetail from './_components/AssignmentDetail';
import SubmitList from './_components/SubmitList';

export default async function AssignmentDetailPage(
  props: {
    params: Promise<{ assignmentId: string }>;
  }
) {
  const params = await props.params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['assignment', 'detail', Number(params.assignmentId)],
    queryFn: () =>
      assignmentService.getAssignmentDetail(Number(params.assignmentId)),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="container mx-auto px-4 py-12">
        <AssignmentDetail assignmentId={Number(params.assignmentId)} />
        <SubmitList />
      </div>
    </HydrationBoundary>
  );
}
