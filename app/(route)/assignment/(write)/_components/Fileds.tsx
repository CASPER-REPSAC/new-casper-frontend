import DndFileInput from '@app/_components/common/DndFileInput';
import { UploadType } from '@app/_hooks/apis/shared/useFileUploadMutation';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@app/_shadcn/components/ui/form';
import { Input } from '@app/_shadcn/components/ui/input';
import { Textarea } from '@app/_shadcn/components/ui/textarea';
import { AssignmentCreateFormType } from '@app/_types/assignment';
import { format, parseISO } from 'date-fns';
import { useFormContext } from 'react-hook-form';

export function TitleInput() {
  const { control } = useFormContext<AssignmentCreateFormType>();
  return (
    <FormField
      control={control}
      name="title"
      render={({ field }) => (
        <FormItem className="space-y-2">
          <FormLabel>제목</FormLabel>
          <Input {...field} />
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export function CategoryInput() {
  const { control } = useFormContext<AssignmentCreateFormType>();

  return (
    <FormField
      control={control}
      name="category"
      render={({ field }) => (
        <FormItem className="space-y-2">
          <FormLabel>과목</FormLabel>
          <Input placeholder="과제의 과목을 입력하세요" {...field} />
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export function DescriptionInput() {
  const { control } = useFormContext<AssignmentCreateFormType>();

  return (
    <FormField
      control={control}
      name="description"
      render={({ field }) => (
        <FormItem className="space-y-2">
          <FormLabel>설명</FormLabel>
          <Textarea
            placeholder="과제에 대한 상세 설명을 입력하세요"
            rows={4}
            {...field}
          />
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export function DeadlineInput() {
  const { control } = useFormContext<AssignmentCreateFormType>();

  const isoToValue = (iso?: string) => {
    if (!iso) return undefined;
    const date = parseISO(iso);
    return format(date, "yyyy-MM-dd'T'HH:mm");
  };

  return (
    <FormField
      control={control}
      name="deadline"
      render={({ field }) => (
        <FormItem className="space-y-2">
          <FormLabel>마감일</FormLabel>
          <div className="relative">
            <Input
              type="datetime-local"
              {...field}
              max="2100-12-31T00:00"
              onChange={(e) => {
                const { value } = e.currentTarget;
                const utcDate = new Date(value);
                field.onChange(utcDate.toISOString());
              }}
              value={isoToValue(field.value || '')}
            />
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export function FileInput({ type }: { type: UploadType }) {
  const { control } = useFormContext<AssignmentCreateFormType>();

  return (
    <FormField
      control={control}
      name="files"
      render={({ field }) => (
        <FormItem className="space-y-2">
          <FormLabel>첨부 파일</FormLabel>
          <div className="flex items-center space-x-2">
            <FormControl ref={field.ref}>
              <DndFileInput
                type={type}
                onFileViewerChange={(files) => field.onChange(files)}
                files={
                  field.value?.map(({ name, url }) => ({ name, url })) || []
                }
                size="sm"
              />
            </FormControl>
          </div>
        </FormItem>
      )}
    />
  );
}
