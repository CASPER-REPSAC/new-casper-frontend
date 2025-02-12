interface Props {
  params: { assignmentId: string };
}

export default async function AssignmentDetail({ params }: Props) {
  return <>{params.assignmentId}</>;
}
