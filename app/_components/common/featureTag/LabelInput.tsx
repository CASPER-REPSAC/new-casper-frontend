import {
  ForwardedRef,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
  useId,
} from 'react';
import DefaultInput from '../defaultTag/DefaultInput';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelIcon?: ReactNode;
  hasError?: boolean;
}

function LabelInput(
  { label, labelIcon, hasError = false, className, ...props }: Props,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const uniqueId = useId();
  const hasIcon = !!labelIcon;

  const hasIconClassName = `${hasIcon ? 'pl-11' : ''}`;
  const hasErrorClassName = `${hasError ? 'border-red-300' : ''}`;

  return (
    <div>
      {label && (
        <label className="label" htmlFor={uniqueId}>
          {label}
        </label>
      )}
      <div className="relative w-full">
        {labelIcon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            {labelIcon}
          </div>
        )}
        <DefaultInput
          ref={ref}
          id={uniqueId}
          className={`${hasIconClassName} ${hasErrorClassName} ${className}`}
          {...props}
        />
      </div>
    </div>
  );
}

export default forwardRef(LabelInput);
