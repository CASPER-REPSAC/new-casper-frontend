import { CheckInput, DefaultButton } from 'app/_components/common';
import { JoinFormData } from 'app/_types/joinTypes';
import { useFormContext } from 'react-hook-form';

interface Props {
  onNext: () => void;
}

function AgreeForm({ onNext }: Props) {
  const { register, watch, handleSubmit } = useFormContext<JoinFormData>();

  const agreeRegister = register('agree');
  const isValidValue = watch('agree') === true && watch('agree') !== undefined;

  return (
    <>
      <CheckInput
        {...agreeRegister}
        label="개인 정보 수집 이용 동의서 (필수)"
      />
      <div className="flex flex-col gap-4 rounded border border-solid border-gray-300 bg-gray-800 p-4 text-lg font-thin">
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
      <DefaultButton
        theme="primary"
        type="submit"
        disabled={!isValidValue}
        onClick={handleSubmit(onNext)}
      >
        다음 단계
      </DefaultButton>
    </>
  );
}

export default AgreeForm;
