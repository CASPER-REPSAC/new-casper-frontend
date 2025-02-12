import SubmitList from './_components/SubmitList';
import AssignmentDetail from './_components/AssignmentDetail';

export default function AssignmentDetailPage({
  params,
}: {
  params: { assignmentId: string };
}) {
  return (
    <div className="container mx-auto px-4 py-12">
      <AssignmentDetail assignmentId={Number(params.assignmentId)} />
      <SubmitList />
    </div>
  );
}
