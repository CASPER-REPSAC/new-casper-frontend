import { styled } from 'styled-components';
import { CheckInput } from '@src/components/common/featureTag';
import { DefaultButton } from '@src/components/common/defaultTag';
import { JoinFormData } from '@src/types/joinTypes';
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
        register={agreeRegister}
        label="개인 정보 수집 이용 동의서 (필수)"
      />
      <Info>
        <Li>
          <Point>수집 목적:</Point> 이용자에게 최적의 서비스를 제공하기 위함
        </Li>
        <Li>
          <Point>수집 항목:</Point> 이름, 이메일
        </Li>
        <Li>
          <Point>보유 및 이용기간:</Point> 회원 탈퇴 시 까지
        </Li>
      </Info>
      <DefaultButton
        $full
        $size="large"
        $color="green"
        $active={isValidValue}
        type="submit"
        onClick={handleSubmit(onNext)}
      >
        다음 단계
      </DefaultButton>
    </>
  );
}

const Info = styled.div`
  background-color: ${({ theme }) => theme.surfaceAlt};
  border: 1px solid ${({ theme }) => theme.borderDefault};
  border-radius: 3px;
  padding: 1em;
  font-size: 1.8rem;
  display: flex;
  flex-direction: column;
  gap: 1em;
  color: ${({ theme }) => theme.textWeek};
`;
const Point = styled.span`
  color: ${({ theme }) => theme.textStrong};
  font-weight: bold;
`;
const Li = styled.li``;

export default AgreeForm;
