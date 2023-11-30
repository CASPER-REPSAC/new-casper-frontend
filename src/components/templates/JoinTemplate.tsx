import styled from 'styled-components';
import { useFunnel } from 'app/_hooks';
import { SmallCenterWrapper } from '@src/components/common/centerWrapper';
import { ReactNode } from 'react';
import { FunnelStepType } from '@src/types/joinTypes';

interface Props {
  agreeForm: ReactNode;
  emailForm: ReactNode;
  nameForm: ReactNode;
  idForm: ReactNode;
  passwordForm: ReactNode;
}

function JoinTemplate({
  agreeForm,
  emailForm,
  nameForm,
  idForm,
  passwordForm,
}: Props) {
  const { funnelStep } = useFunnel<FunnelStepType>('agree');

  return (
    <Wrapper>
      {funnelStep === 'agree' && <>{agreeForm}</>}
      {funnelStep === 'email' && <>{emailForm}</>}
      {funnelStep === 'name' && <>{nameForm}</>}
      {funnelStep === 'id' && <>{idForm}</>}
      {funnelStep === 'password' && <>{passwordForm}</>}
    </Wrapper>
  );
}

const Wrapper = styled(SmallCenterWrapper)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default JoinTemplate;
