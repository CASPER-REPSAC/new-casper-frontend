import { DefaultTextarea } from '@app/_components/common';
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
        <DefaultTextarea
          {...commentRegister}
          readOnly={!editable}
          className={`resize-none text-base ${
            editable ? 'border-0 border-b-2 dark:border-b-2' : ' border-0 '
          } max-h-28 bg-transparent px-0 focus:ring-0 dark:bg-transparent dark:focus:ring-0`}
        />
      ) : (
        <div className="text-base">{comment}</div>
      )}
    </>
  );
}

export default Content;
