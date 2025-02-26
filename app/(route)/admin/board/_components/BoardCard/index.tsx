'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import useCreateSubCategory from '@app/_hooks/apis/admin/useCreateSubCategory';
import { Button } from '@app/_shadcn/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@app/_shadcn/components/ui/card';
import { Input } from '@app/_shadcn/components/ui/input';
import SubCategoryCard from './SubCategoryCard';

interface Props {
  title: string;
  subCategories: string[];
}

function BoardCard({ title, subCategories }: Props) {
  const { register, handleSubmit } = useForm<{
    subCategory: string;
  }>();
  const { mutate } = useCreateSubCategory();
  const createSubCategoryRegister = register('subCategory', { required: true });

  const createSubCategory: SubmitHandler<{
    subCategory: string;
  }> = ({ subCategory }) => {
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
        <form
          onSubmit={handleSubmit(createSubCategory)}
          className="ml-auto flex gap-2"
        >
          <Input
            type="text"
            autoComplete="off"
            placeholder="새로운 카테고리를 입력하세요."
            {...createSubCategoryRegister}
          />
          <Button type="submit">추가</Button>
        </form>
      </CardFooter>
    </Card>
  );
}

export default BoardCard;
