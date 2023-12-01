import { ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

interface Props {
  children: ReactNode;
}

function ClientFormProvider({ children }: Props) {
  const methods = useForm();
  return <FormProvider {...methods}>{children}</FormProvider>;
}

export default ClientFormProvider;
