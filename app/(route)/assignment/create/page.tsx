import AssignmentCreateForm from './_components/AssignmentCreateForm';

export default function CreateAssignmentPage() {
  return (
    <div className="container mx-auto max-w-2xl px-4 py-12">
      <h1 className="text-2xl">새 과제 만들기</h1>
      <AssignmentCreateForm />
    </div>
  );
}
