'use client';

import { Button } from '@app/_shadcn/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@app/_shadcn/components/ui/card';
import { Input } from '@app/_shadcn/components/ui/input';
import useCreateSubCategory from '@app/_hooks/apis/admin/useCreateSubCategory';
import { useForm } from 'react-hook-form';
import SubCategoryCard from './SubCategoryCard';

interface Props {
  title: string;
  subCategories: string[];
}

function BoardCard({ title, subCategories }: Props) {
  const { register, getValues } = useForm<{ subCategory: string }>();
  const { mutate } = useCreateSubCategory();
  const createSubCategoryRegister = register('subCategory');

  const createSubCategory = () => {
    const { subCategory } = getValues();
    mutate({ boardName: title, subBoardName: subCategory });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 ">
          {subCategories.length === 0
            ? '소분류가 없어요.'
            : subCategories.map((category) => (
                <SubCategoryCard
                  key={category}
                  boardName={title}
                  category={category}
                />
              ))}
        </div>
      </CardContent>
      <CardFooter>
        <div className="ml-auto flex gap-2">
          <Input
            autoComplete="off"
            placeholder="새로운 카테고리를 입력하세요."
            {...createSubCategoryRegister}
          />
          <Button onClick={createSubCategory}>추가</Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default BoardCard;
