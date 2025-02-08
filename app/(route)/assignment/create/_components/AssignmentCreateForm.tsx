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
import { format } from 'date-fns';
import { ChangeEventHandler } from 'react';
import assignmentService from '@app/_service/assignmentService';
import { useRouter } from 'next/navigation';
import { NEW_PATH } from '@app/_constants/urls';

export default function AssignmentCreateForm() {
  const methods = useForm<AssignmentCreateFormType>({
    resolver: zodResolver(assignmentCreateFormSchema),
  });
  const { formState, handleSubmit, getValues } = methods;
  const { push } = useRouter();

  const onValid: SubmitHandler<AssignmentCreateFormType> = async (data) => {
    const { files, deadline, ...rest } = data;
    const uploadedFiles = getValues('files');
    const uploadedFileUrls = uploadedFiles?.map(({ url }) => url);
    await assignmentService.createAssignment({
      ...rest,
      urls: uploadedFileUrls,
      deadline,
    });
    push(NEW_PATH.assignmentList.url(1));
  };

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

  const { setValue } = useFormContext<AssignmentCreateFormType>();

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { files } = e.currentTarget;
    if (!files) return;
    fileUploadMutate(
      { type: 'assignment', files },
      {
        onSuccess: (uploadedFiles) => {
          const reulstFiles = uploadedFiles.map(({ name, url }, index) => ({
            name,
            url,
            file: files[index],
          }));
          setValue('files', reulstFiles, { shouldValidate: true });
        },
      },
    );
  };

  return (
    <div className="space-y-2">
      <Label htmlFor="file">첨부 파일</Label>
      <div className="flex items-center space-x-2">
        <Input
          id="file"
          type="file"
          multiple
          className="flex-grow"
          onChange={onChange}
        />
        {isPending && <Spinner />}
        {isSuccess && <Check />}
        {isError && <CircleOff />}
      </div>
    </div>
  );
}
