'use client';

import assignmentService from '@app/_service/assignmentService';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { NEW_PATH } from '@app/_constants/urls';
import {
  AssignmentCreateFormType,
  assignmentCreateFormSchema,
} from '@app/_types/assignment';
import { Button } from '@app/_shadcn/components/ui/button';
import {
  TitleInput,
  CategoryInput,
  DescriptionInput,
  DeadlineInput,
  FileInput,
} from './Fileds';

export default function AssignmentCreateForm() {
  const methods = useForm<AssignmentCreateFormType>({
    resolver: zodResolver(assignmentCreateFormSchema),
  });
  const { formState, handleSubmit, getValues } = methods;
  const { push } = useRouter();

  const { mutate: createAssignmentMutate } = useMutation({
    mutationFn: (
      data: Parameters<typeof assignmentService.createAssignment>[0],
    ) => assignmentService.createAssignment(data),
    onSuccess: () => {
      push(NEW_PATH.assignmentList.url(1));
    },
  });

  const onValid: SubmitHandler<AssignmentCreateFormType> = async (data) => {
    const { files, deadline, ...rest } = data;
    const uploadedFiles = getValues('files');
    const uploadedFileUrls = uploadedFiles?.map(({ url }) => url);

    const body = {
      ...rest,
      urls: uploadedFileUrls,
      deadline,
    };

    createAssignmentMutate(body);
  };

  return (
    <FormProvider {...methods}>
      <form className="space-y-4" onSubmit={handleSubmit(onValid)}>
        <TitleInput />
        <CategoryInput />
        <DescriptionInput />
        <DeadlineInput />
        <FileInput type="assignment" />
        <Button type="submit" className="w-full" disabled={!formState.isValid}>
          과제 생성
        </Button>
      </form>
    </FormProvider>
  );
}
