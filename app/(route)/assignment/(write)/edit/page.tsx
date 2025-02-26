import assignmentService from '@app/_service/assignmentService';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
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
      <h1 className="text-2xl">과제 수정</h1>
      <AssignmentEditForm />
    </HydrationBoundary>
  );
}

export default AssignmentEditPage;
