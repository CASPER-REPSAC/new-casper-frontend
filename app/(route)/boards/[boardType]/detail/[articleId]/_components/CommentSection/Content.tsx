import { Textarea } from '@app/_shadcn/components/ui/textarea';
import textareaAutosize from '@app/_utils/textareaAutosize';
import { useFormContext } from 'react-hook-form';

interface Props {
  comment: string;
  editable?: boolean;
}

function Content({ comment, editable = false }: Props) {
  const { register } = useFormContext();

  const commentRegister = register('comment', {
    required: true,
    onChange: textareaAutosize,
  });

  return (
    <>
      {editable ? (
        <Textarea {...commentRegister} />
      ) : (
        <div className="whitespace-pre text-base">{comment}</div>
      )}
    </>
  );
}

export default Content;
