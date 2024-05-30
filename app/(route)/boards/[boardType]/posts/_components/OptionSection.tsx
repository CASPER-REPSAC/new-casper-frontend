'use client';

import { Checkbox } from '@app/_shadcn/components/ui/checkbox';
import { Label } from '@app/_shadcn/components/ui/label';
import { PostReqData } from '@app/_types/PostTypes';
import { useId } from 'react';
import { useFormContext } from 'react-hook-form';

function OptionSection() {
  const checkboxId = useId();
  const { watch, setValue } = useFormContext<PostReqData>();

  return (
    <Label
      htmlFor={checkboxId}
      className="flex-center w-fit cursor-pointer gap-2"
    >
      <Checkbox
        id={checkboxId}
        checked={watch('hide')}
        onCheckedChange={(checked) => {
          setValue('hide', Boolean(checked));
        }}
      />
      <span>비밀글</span>
    </Label>
  );
}

export default OptionSection;
