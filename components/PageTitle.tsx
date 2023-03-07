import styled from "styled-components";

const Wrapper = styled.div`
  height: 120px;
  width: 100vw;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  box-sizing: border-box;
  margin-top: 71px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;

const Title = styled.div`
  font-size: 3rem;
`;
const Sub = styled.div`
  font-size: 1rem;
  font-weight: lighter;
`;

interface pageTitleProps {
  pageTitle: string;
}
function PageTitle({ pageTitle }: pageTitleProps) {
  return (
    <Wrapper>
      <Title>{pageTitle}</Title>
      <Sub>
        홈 {">"} Members {">"} 활동 중
      </Sub>
    </Wrapper>
  );
}

export default PageTitle;
