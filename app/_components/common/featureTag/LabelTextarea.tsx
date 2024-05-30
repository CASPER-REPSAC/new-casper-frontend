import { ForwardedRef, TextareaHTMLAttributes, forwardRef, useId } from 'react';
import DefaultTextarea from '../defaultTag/DefaultTextarea';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

function LabelTextarea(
  { label, ...props }: Props,
  ref: ForwardedRef<HTMLTextAreaElement>,
) {
  const uniqueId = useId();

  return (
    <div>
      <label className="label" htmlFor={uniqueId}>
        {label}
      </label>
      <DefaultTextarea ref={ref} id={uniqueId} {...props} />
    </div>
  );
}

export default forwardRef(LabelTextarea);
