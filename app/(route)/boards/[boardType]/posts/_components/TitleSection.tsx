'use client';

import { KeyboardEventHandler } from 'react';
import { useFormContext } from 'react-hook-form';
import { PLACEHOLDER } from '@app/_constants/label';
import { PostReqData } from '@app/_types/PostTypes';
import { Input } from '@nextui-org/react';

function TitleSection() {
  const { register } = useFormContext<PostReqData>();

  const titleRegister = register('title', { required: true });

  const preventSubmit: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  return (
    <Input
      size="lg"
      {...titleRegister}
      variant="underlined"
      placeholder={PLACEHOLDER.title}
      onKeyDown={preventSubmit}
    />
  );
}

export default TitleSection;
