'use client';

/* eslint-disable @typescript-eslint/no-unused-vars */

import { Button } from '@app/_shadcn/components/ui/button';
import { Input } from '@app/_shadcn/components/ui/input';
import { Label } from '@app/_shadcn/components/ui/label';
import { Textarea } from '@app/_shadcn/components/ui/textarea';
import {
  FormProvider,
  SubmitHandler,
  useForm,
  useFormContext,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  AssignmentCreateFormType,
  assignmentCreateFormSchema,
} from '@app/_types/assignment';
import useFileUploadMutation from '@app/_hooks/apis/shared/useFileUploadMutation';
import Spinner from '@app/_components/Spinner';
import { Check, CircleOff } from 'lucide-react';
import { useMutationState } from '@tanstack/react-query';
import { format } from 'date-fns';

export default function AssignmentCreateForm() {
  const methods = useForm<AssignmentCreateFormType>({
    resolver: zodResolver(assignmentCreateFormSchema),
  });
  const { formState, handleSubmit } = methods;

  const uploadedFiles = useMutationState({
    filters: { mutationKey: ['file-upload'], status: 'success' },
    select: (mutation) => mutation.state.data,
  });

  const onValid: SubmitHandler<AssignmentCreateFormType> = (data) => {
    const { files, deadline, ...rest } = data;
    // const uploadedFileUrls = uploadedFiles?.map(({ url }) => url);
  };
  console.log(formState.errors, formState.isValid);
  return (
    <FormProvider {...methods}>
      <form className="space-y-4" onSubmit={handleSubmit(onValid)}>
        <TitleInput />
        <CategoryInput />
        <DescriptionInput />
        <DeadlineInput />
        <FileInput />
        <Button type="submit" className="w-full" disabled={!formState.isValid}>
          과제 생성
        </Button>
      </form>
    </FormProvider>
  );
}

function TitleInput() {
  const { register } = useFormContext();
  const titleRegister = register('title');

  return (
    <div className="space-y-2">
      <Label htmlFor="title">제목</Label>
      <Input
        id="title"
        placeholder="과제의 제목을 입력하세요"
        {...titleRegister}
      />
    </div>
  );
}

function CategoryInput() {
  const { register } = useFormContext();
  const categoryRegister = register('category');

  return (
    <div className="space-y-2">
      <Label htmlFor="category">과목</Label>
      <Input
        id="category"
        placeholder="과제의 과목을 입력하세요"
        {...categoryRegister}
      />
    </div>
  );
}

function DescriptionInput() {
  const { register } = useFormContext();
  const descriptionRegister = register('description');

  return (
    <div className="space-y-2">
      <Label htmlFor="description">설명</Label>
      <Textarea
        id="description"
        placeholder="과제에 대한 상세 설명을 입력하세요"
        rows={4}
        {...descriptionRegister}
      />
    </div>
  );
}

function DeadlineInput() {
  const { register } = useFormContext();
  const deadlineRegister = register('deadline');

  const defaultValue = format(new Date(), "yyyy-MM-dd'T'HH:mm");

  return (
    <div className="space-y-2">
      <Label htmlFor="dueDate">마감일</Label>
      <div className="relative">
        <Input
          id="dueDate"
          type="datetime-local"
          {...deadlineRegister}
          max="2100-12-31T00:00"
          defaultValue={defaultValue}
        />
      </div>
    </div>
  );
}

function FileInput() {
  const {
    mutate: fileUploadMutate,
    isPending,
    isSuccess,
    isError,
  } = useFileUploadMutation();

  const { register } = useFormContext();
  const filesRegister = register('files', {
    onChange: (e) => {
      const { files } = e.currentTarget;
      if (!files) return;
      console.log('mutate!');
      fileUploadMutate({ type: 'assignment', files });
    },
  });

  return (
    <div className="space-y-2">
      <Label htmlFor="file">첨부 파일</Label>
      <div className="flex items-center space-x-2">
        <Input
          id="file"
          type="file"
          multiple
          className="flex-grow"
          {...filesRegister}
        />
        {isPending && <Spinner />}
        {isSuccess && <Check />}
        {isError && <CircleOff />}
      </div>
    </div>
  );
}
