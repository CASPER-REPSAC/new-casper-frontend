import { styled } from 'styled-components';

function ContentSection() {
  return (
    <>
      <Title>test</Title>
      <AuthorInfo>
        <Avatar />
        <Info>
          <AuthorName>이름</AuthorName>
          <Desc>소개글</Desc>
        </Info>
      </AuthorInfo>
    </>
  );
}

export default ContentSection;

const Title = styled.h1`
  font-size: 600%;
`;
const AuthorInfo = styled.div`
  display: flex;
  margin-top: 200px;
  align-items: center;
`;
const Avatar = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ theme }) => theme.borderDefault};
  margin-right: 50px;
`;
const Info = styled.div`
  display: flex;

  flex-direction: column;
`;
const AuthorName = styled.h1`
  font-size: 2.4rem;
  margin-bottom: 0.5em;
`;
const Desc = styled.div`
  font-size: 2rem;
`;
