import { JoinFormData } from '@app/_types/joinTypes';
import { ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

interface Props {
  children: ReactNode;
}

function JoinFormProvider({ children }: Props) {
  const methods = useForm<JoinFormData>();

  return <FormProvider {...methods}>{children}</FormProvider>;
}

export default JoinFormProvider;
