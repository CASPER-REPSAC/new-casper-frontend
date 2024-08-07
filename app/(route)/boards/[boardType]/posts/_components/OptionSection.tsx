'use client';

import { Checkbox } from '@app/_shadcn/components/ui/checkbox';
import { Label } from '@app/_shadcn/components/ui/label';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@app/_shadcn/components/ui/tooltip';
import { CreateArticleForm } from '@app/_types/PostTypes';
import { Info } from 'lucide-react';
import { useId } from 'react';
import { useFormContext } from 'react-hook-form';

function OptionSection() {
  const checkboxId = useId();
  const { watch, setValue } = useFormContext<CreateArticleForm>();

  return (
    <section className="flex gap-2">
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
        <span>과제 제출하기</span>
      </Label>
      <Tooltip>
        <TooltipTrigger>
          <Info size={14} />
        </TooltipTrigger>
        <TooltipContent>
          <p>정회원만 열람할 수 있는 비밀글이 돼요.</p>
        </TooltipContent>
      </Tooltip>
    </section>
  );
}

export default OptionSection;
