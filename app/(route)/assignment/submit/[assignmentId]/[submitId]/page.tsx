import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import assignmentService from '@app/_service/assignmentService';
import SubmissionDetailCard from './_components/SubmissionDetailCard';
import FeedbackSection from './_components/FeedbackSection';

export default function SubmissionDetailPage({
  params,
}: {
  params: { id: string; submissionId: string };
}) {
  const queryClient = new QueryClient();
  queryClient.prefetchQuery({
    queryKey: ['submitDetail', Number(params.id), Number(params.submissionId)],
    queryFn: () =>
      assignmentService.getSubmitDetail(
        Number(params.id),
        Number(params.submissionId),
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
