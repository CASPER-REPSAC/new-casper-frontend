import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import assignmentService from '@app/_service/assignmentService';
import { submitQueryKey } from '@app/_hooks/apis/queryKey';
import SubmissionDetailCard from './_components/SubmissionDetailCard';
import FeedbackSection from './_components/FeedbackSection';

export default async function SubmissionDetailPage({
  params,
}: {
  params: { assignmentId: string; submitId: string };
}) {
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
