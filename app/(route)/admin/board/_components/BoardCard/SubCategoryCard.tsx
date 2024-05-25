'use client';

import { revalidatePath } from '@app/_actions';
import useDeleteSubCategory from '@app/_hooks/apis/admin/useDeleteSubCategory';
import usePatchSubCategory from '@app/_hooks/apis/admin/usePatchSubCategory';
import { Button } from '@app/_shadcn/components/ui/button';
import { Input } from '@app/_shadcn/components/ui/input';
import { useForm } from 'react-hook-form';

interface Props {
  boardName: string;
  category: string;
}

function SubCategoryCard({ boardName, category }: Props) {
  const { mutate: patchMutate } = usePatchSubCategory();
  const { mutate: deleteMutate } = useDeleteSubCategory();
  const { register, getValues } = useForm<{ subCategory: string }>({
    defaultValues: {
      subCategory: category,
    },
  });

  const onPatchClick = () => {
    const { subCategory } = getValues();
    patchMutate({
      subBoardName: subCategory,
      boardName,
      targetSubCategory: category,
    });
  };

  const onDelteClick = () => {
    const { subCategory } = getValues();
    deleteMutate({ targetSubCategory: subCategory, boardName });
    revalidatePath('/admin/board');
  };

  return (
    <div
      className="flex items-center gap-2 rounded border bg-secondary px-4 py-2"
      key={category}
    >
      <Input defaultValue={category} {...register('subCategory')} />
      <Button size="sm" variant="outline" onClick={onPatchClick}>
        수정
      </Button>
      <Button size="sm" variant="destructive" onClick={onDelteClick}>
        삭제
      </Button>
    </div>
  );
}

export default SubCategoryCard;
