import assignmentService from '@app/_service/assignmentService';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { submitQueryKey } from '@app/_hooks/apis/queryKey';
import { SubmitEditForm } from '../_components/SubmitForm';

interface Props {
  searchParams: {
    submitId: string;
    assignmentId: string;
  };
}

async function EditPage({ searchParams }: Props) {
  const assignmentId = Number(searchParams.assignmentId);
  const submitId = Number(searchParams.submitId);
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: submitQueryKey.detail({
      assignmentId,
      submitId,
    }),
    queryFn: () => assignmentService.getSubmitDetail(assignmentId, submitId),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="container mx-auto max-w-2xl px-4 py-12">
        <h1 className="text-2xl">과제 수정</h1>
        <SubmitEditForm />
      </div>
    </HydrationBoundary>
  );
}

export default EditPage;
