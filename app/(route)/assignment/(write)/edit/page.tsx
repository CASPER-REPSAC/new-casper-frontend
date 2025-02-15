import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import assignmentService from '@app/_service/assignmentService';
import AssignmentEditForm from '../_components/AssignmentEditForm';

async function AssignmentEditPage({
  searchParams,
}: {
  searchParams: { assignmentId: string };
}) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['assignment', 'detail', Number(searchParams.assignmentId)],
    queryFn: () =>
      assignmentService.getAssignmentDetail(Number(searchParams.assignmentId)),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <AssignmentEditForm />
    </HydrationBoundary>
  );
}

export default AssignmentEditPage;
