import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function FormErrorWrapper({ children }: Props) {
  return (
    <ul className="flex flex-col gap-2 text-sm text-danger-400">{children}</ul>
  );
}

export default FormErrorWrapper;
