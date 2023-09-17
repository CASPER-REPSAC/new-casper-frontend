import CheckInput from '@src/components/common/CheckInput';
import DefaultButton from '@src/components/common/DefaultButton';
import { JoinFormData } from '@src/types/joinTypes';
import { PATH } from '@src/utils/urls';
import { useRouter } from 'next/router';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import styled from 'styled-components';

function AgreeForm() {
  const { register, handleSubmit } = useFormContext<JoinFormData>();
  const router = useRouter();
  const agreeRegister = register('agree');

  const onValid: SubmitHandler<JoinFormData> = (data) => {
    if (!data.agree) return;
    const nextStep = 'email';
    router.push({
      pathname: PATH.user.join.url,
      query: { 'funnel-step': nextStep },
    });
  };

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
      <DefaultButton type="large" onClick={handleSubmit(onValid)}>
        다음 단계
      </DefaultButton>
    </>
  );
}

const Info = styled.div`
  background-color: ${({ theme }) => theme.surfacePointAlt};
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
