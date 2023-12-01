import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface Props {
  headerSection: ReactNode;
  bodySection: ReactNode;
  buttonSection: ReactNode;
  footerSection: ReactNode;
}

function PageTemplate({
  headerSection,
  bodySection,
  buttonSection,
  footerSection,
}: Props) {
  return (
    <Wrapper>
      <HeaderSection>{headerSection}</HeaderSection>
      <BodySection>{bodySection}</BodySection>
      <ButtonSection>{buttonSection}</ButtonSection>
      <FooterSection>{footerSection}</FooterSection>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const HeaderSection = styled.div`
  width: 100%;
`;
const BodySection = styled.div``;
const ButtonSection = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;
const FooterSection = styled.div`
  width: 100%;
  margin-top: 2rem;
`;

export default PageTemplate;
