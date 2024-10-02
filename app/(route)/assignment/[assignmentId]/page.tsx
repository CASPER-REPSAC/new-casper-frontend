import SubmitList from './_components/SubmitList';
import AssignmentDetail from './_components/AssignmentDetail';

export default function AssignmentDetailPage({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  params,
}: {
  params: { assignmentId: string };
}) {
  return (
    <div className="container mx-auto px-4 py-12">
      <AssignmentDetail />
      <SubmitList />
    </div>
  );
}
