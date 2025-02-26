'use client';

import { revalidatePath } from '@app/_actions';
import { SubmitHandler, useForm } from 'react-hook-form';
import useDeleteSubCategory from '@app/_hooks/apis/admin/useDeleteSubCategory';
import usePatchSubCategory from '@app/_hooks/apis/admin/usePatchSubCategory';
import { ADMIN_PATH } from '@app/_constants/urls';
import { Button } from '@app/_shadcn/components/ui/button';
import { Input } from '@app/_shadcn/components/ui/input';

interface Props {
  boardName: string;
  category: string;
}

function SubCategoryCard({ boardName, category }: Props) {
  const { mutate: patchMutate } = usePatchSubCategory();
  const { mutate: deleteMutate } = useDeleteSubCategory();
  const { register, handleSubmit } = useForm<{
    subCategory: string;
  }>({
    defaultValues: {
      subCategory: category,
    },
  });

  const patchCategory: SubmitHandler<{ subCategory: string }> = ({
    subCategory,
  }) => {
    patchMutate({
      subBoardName: subCategory,
      boardName,
      targetSubCategory: category,
    });
  };

  const deleteCategory: SubmitHandler<{ subCategory: string }> = ({
    subCategory,
  }) => {
    deleteMutate({ targetSubCategory: subCategory, boardName });
    revalidatePath(ADMIN_PATH.board);
  };

  return (
    <div
      className="flex items-center gap-2 rounded border bg-secondary px-4 py-2"
      key={category}
    >
      <Input defaultValue={category} {...register('subCategory')} />
      <Button
        type="submit"
        size="sm"
        variant="outline"
        onSubmit={handleSubmit(patchCategory)}
      >
        수정
      </Button>
      <Button
        type="submit"
        size="sm"
        variant="destructive"
        onClick={handleSubmit(deleteCategory)}
      >
        삭제
      </Button>
    </div>
  );
}

export default SubCategoryCard;
