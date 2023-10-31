import { NextPageContext } from 'next';
import styled from 'styled-components';

interface Props {
  statusCode: number;
}

function Error({ statusCode }: Props) {
  return (
    <Wrapper>
      {statusCode ? (
        <>
          <ErrorCode>{statusCode}</ErrorCode>
          <Vr />
          <ErrorMessage>An error occurred on Server</ErrorMessage>
        </>
      ) : (
        'An error occurred on client'
      )}
    </Wrapper>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const errCode = err ? err.statusCode : 404;
  const statusCode = res ? res.statusCode : errCode;
  return { statusCode };
};

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
`;

const ErrorCode = styled.span`
  font-size: 4rem;
  color: ${({ theme }) => theme.textStrong};
`;
const ErrorMessage = styled.span`
  font-size: 3rem;
  font-weight: 300;
  color: ${({ theme }) => theme.textWeek};
`;
const Vr = styled.div`
  height: 40px;
  width: 2px;
  background-color: ${({ theme }) => theme.textPoint};
`;

export default Error;
