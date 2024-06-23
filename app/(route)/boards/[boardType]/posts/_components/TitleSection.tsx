'use client';

import { KeyboardEventHandler } from 'react';
import { useFormContext } from 'react-hook-form';
import { PLACEHOLDER } from '@app/_constants/label';
import { CreateArticleForm } from '@app/_types/PostTypes';
import { Input } from '@app/_shadcn/components/ui/input';

function TitleSection() {
  const { register } = useFormContext<CreateArticleForm>();

  const titleRegister = register('title', { required: true });

  const preventSubmit: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  return (
    <Input
      type="text"
      {...titleRegister}
      placeholder={PLACEHOLDER.title}
      onSubmit={preventSubmit}
    />
  );
}

export default TitleSection;
