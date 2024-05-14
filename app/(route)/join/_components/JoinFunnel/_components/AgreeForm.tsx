import { Card } from '@app/_shadcn/components/ui/card';
import { Checkbox } from '@app/_shadcn/components/ui/checkbox';
import { JoinFormData } from '@app/_types/joinTypes';
import { useId } from 'react';
import { useFormContext } from 'react-hook-form';

function AgreeForm() {
  const checkBoxId = useId();
  const { setValue, watch } = useFormContext<JoinFormData>();

  return (
    <>
      <div className="flex cursor-pointer items-center gap-2">
        <Checkbox
          id={checkBoxId}
          required
          checked={watch('agree')}
          onCheckedChange={(checked) => setValue('agree', Boolean(checked))}
        />
        <label htmlFor={checkBoxId}>개인 정보 수집 이용 동의서 (필수)</label>
      </div>

      <Card className="flex flex-col gap-2 p-8">
        <li>
          <strong>수집 목적:</strong> 이용자에게 최적의 서비스를 제공하기 위함
        </li>
        <li>
          <strong>수집 항목:</strong> 이름, 이메일
        </li>
        <li>
          <strong>보유 및 이용기간:</strong> 회원 탈퇴 시 까지
        </li>
      </Card>
    </>
  );
}

export default AgreeForm;
