import assignmentService from '@app/_service/assignmentService';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { submitQueryKey } from '@app/_hooks/apis/queryKey';
import FeedbackSection from './_components/FeedbackSection';
import SubmissionDetailCard from './_components/SubmissionDetailCard';

export default async function SubmissionDetailPage(props: {
  searchParams: Promise<{ assignmentId: string; submitId: string }>;
}) {
  const { assignmentId, submitId } = await props.searchParams;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: submitQueryKey.detail({
      assignmentId: Number(assignmentId),
      submitId: Number(submitId),
    }),
    queryFn: () =>
      assignmentService.getSubmitDetail(Number(assignmentId), Number(submitId)),
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
