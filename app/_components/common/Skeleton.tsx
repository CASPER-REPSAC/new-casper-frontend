import { ReactNode } from 'react';

interface Props {
  className?: string;
  children?: ReactNode;
}

function Skeleton({ className: additionalClassName, children }: Props) {
  const defaultClassName = 'animate-pulse bg-gray-200 dark:bg-gray-600/50';
  return (
    <div className={`${defaultClassName} ${additionalClassName}`}>
      {children}
    </div>
  );
}

export default Skeleton;
