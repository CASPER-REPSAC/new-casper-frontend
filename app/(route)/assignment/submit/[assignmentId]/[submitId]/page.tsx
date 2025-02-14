import assignmentService from '@app/_service/assignmentService';

interface Props {
  params: { submitId: string; assignmentId: string };
}

async function SubmitDetailPage({ params }: Props) {
  const submitDetail = await assignmentService.getSubmitDetail(
    Number(params.assignmentId),
    Number(params.submitId),
  );

  console.log(submitDetail);

  return (
    <div>
      SubmitDetailPage, {params.submitId}, {params.assignmentId}
      <pre>{JSON.stringify(submitDetail)}</pre>
    </div>
  );
}

export default SubmitDetailPage;
