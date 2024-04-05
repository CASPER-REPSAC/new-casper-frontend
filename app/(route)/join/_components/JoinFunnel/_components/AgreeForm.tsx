import { JoinFormData } from '@app/_types/joinTypes';
import { Checkbox } from '@nextui-org/react';
import { useFormContext } from 'react-hook-form';

function AgreeForm() {
  const { setValue, watch } = useFormContext<JoinFormData>();

  return (
    <>
      <Checkbox
        isRequired
        isSelected={watch('agree')}
        onValueChange={(isSelected) => setValue('agree', isSelected)}
      >
        개인 정보 수집 이용 동의서 (필수)
      </Checkbox>
      <div className="flex w-full flex-col gap-4 rounded border border-solid border-slate-300 bg-sky-50 p-4 text-lg font-thin dark:border-slate-600 dark:bg-gray-800">
        <li>
          <strong>수집 목적:</strong> 이용자에게 최적의 서비스를 제공하기 위함
        </li>
        <li>
          <strong>수집 항목:</strong> 이름, 이메일
        </li>
        <li>
          <strong>보유 및 이용기간:</strong> 회원 탈퇴 시 까지
        </li>
      </div>
    </>
  );
}

export default AgreeForm;
