import { SubmitCreateForm } from '../_components/SubmitForm';

function SubmitCreatePage() {
  return (
    <div className="container mx-auto max-w-2xl px-4 py-12">
      <h1 className="text-2xl">과제 제출</h1>
      <SubmitCreateForm />
    </div>
  );
}

export default SubmitCreatePage;
