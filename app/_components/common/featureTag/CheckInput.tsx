import { ForwardedRef, InputHTMLAttributes, forwardRef, useId } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

function CheckInput(
  { label, ...props }: Props,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const uniqueId = useId();

  return (
    <div className="flex items-center gap-4">
      <input
        className="cursor-pointer "
        ref={ref}
        id={uniqueId}
        type="checkbox"
        {...props}
      />
      {label && (
        <label className="label m-0 cursor-pointer" htmlFor={uniqueId}>
          {label}
        </label>
      )}
    </div>
  );
}

export default forwardRef(CheckInput);
