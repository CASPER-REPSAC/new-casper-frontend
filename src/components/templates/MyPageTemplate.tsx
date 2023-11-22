import { SmallCenterWrapper } from '@src/components/common/centerWrapper';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  avartarSection: ReactNode;
  myInfoSection: ReactNode;
  buttonSection: ReactNode;
}

function MyPageTemplate({
  avartarSection,
  myInfoSection,
  buttonSection,
}: Props) {
  return (
    <Wrapper>
      <AvartarSection>{avartarSection}</AvartarSection>
      <MyInfoSection>{myInfoSection}</MyInfoSection>
      <ButtonSection>{buttonSection}</ButtonSection>
    </Wrapper>
  );
}

const Wrapper = styled(SmallCenterWrapper)``;
const AvartarSection = styled.div``;
const MyInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const ButtonSection = styled.div`
  margin-top: 2rem;
`;

export default MyPageTemplate;
