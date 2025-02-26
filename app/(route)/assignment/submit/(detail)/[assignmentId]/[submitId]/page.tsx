import assignmentService from '@app/_service/assignmentService';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { submitQueryKey } from '@app/_hooks/apis/queryKey';
import FeedbackSection from './_components/FeedbackSection';
import SubmissionDetailCard from './_components/SubmissionDetailCard';

export default async function SubmissionDetailPage(
  props: {
    params: Promise<{ assignmentId: string; submitId: string }>;
  }
) {
  const params = await props.params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: submitQueryKey.detail({
      assignmentId: Number(params.assignmentId),
      submitId: Number(params.submitId),
    }),
    queryFn: () =>
      assignmentService.getSubmitDetail(
        Number(params.assignmentId),
        Number(params.submitId),
      ),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="flex flex-col gap-4">
        <SubmissionDetailCard />
        <FeedbackSection />
      </div>
    </HydrationBoundary>
  );
}
