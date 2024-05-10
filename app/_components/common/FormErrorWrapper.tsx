import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function FormErrorWrapper({ children }: Props) {
  return (
    <ul className="text-danger-400 flex flex-col gap-2 text-sm">{children}</ul>
  );
}

export default FormErrorWrapper;
