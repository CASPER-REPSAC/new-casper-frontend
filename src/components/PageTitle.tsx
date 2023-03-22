import styled from "styled-components";

const Wrapper = styled.div`
  height: 120px;
  width: 100vw;
  border-top: 1px solid ${(props) => props.theme.textColor};
  border-bottom: 1px solid ${(props) => props.theme.textColor};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;
const Title = styled.div`
  font-size: 4.8rem;
`;
const Sub = styled.div`
  font-size: 1.6rem;
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
        홈 {">"} {pageTitle}
      </Sub>
    </Wrapper>
  );
}

export default PageTitle;
