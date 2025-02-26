'use client';

import assignmentService from '@app/_service/assignmentService';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useRouter, useSearchParams } from 'next/navigation';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useAssignmentDetail } from '@app/_hooks/apis/assignment/useAssignment';
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

function AssignmentEditForm() {
  const searchParams = useSearchParams();
  const assignmentId = searchParams.get('assignmentId');

  const { data: assignmentDetail } = useAssignmentDetail({
    assignmentId: Number(assignmentId),
  });

  const methods = useForm<AssignmentCreateFormType>({
    resolver: zodResolver(assignmentCreateFormSchema),
    defaultValues: {
      ...assignmentDetail?.assignment,
      files: assignmentDetail?.files?.map((file) => ({
        url: file.src,
        name: file.name,
      })),
    },
  });
  const { formState, handleSubmit, getValues } = methods;
  const router = useRouter();
  const { mutate: updateAssignmentMutate } = useMutation({
    mutationFn: async (
      params: Parameters<typeof assignmentService.updateAssignment>[0],
    ) => {
      const data = await assignmentService.updateAssignment(params);
      return data;
    },
    onSuccess: () => {
      router.push(NEW_PATH.assignmentDetail.url(Number(assignmentId)));
    },
  });

  const onValid: SubmitHandler<AssignmentCreateFormType> = async ({
    files,
    deadline,
    ...rest
  }) => {
    const uploadedFiles = getValues('files');
    const uploadedFileUrls = uploadedFiles?.map(({ url }) => url);

    updateAssignmentMutate({
      ...rest,
      urls: uploadedFileUrls,
      deadline,
      assignmentId: Number(assignmentId),
    });
  };

  return (
    <FormProvider {...methods}>
      <form className="space-y-4" onSubmit={handleSubmit(onValid)}>
        <TitleInput />
        <CategoryInput />
        <DescriptionInput />
        <DeadlineInput />
        <FileInput type="assignment" />
        <Button
          type="submit"
          className="w-full"
          disabled={!formState.isValid || formState.isSubmitting}
        >
          과제 수정
        </Button>
      </form>
    </FormProvider>
  );
}

export default AssignmentEditForm;
