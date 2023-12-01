import { styled } from 'styled-components';

interface Props {
  nickname: string;
}

function AuthorSection({ nickname }: Props) {
  return (
    <AuthorInfo>
      <Avatar />
      <Info>
        <AuthorName>{nickname}</AuthorName>
        <Desc>소개글</Desc>
      </Info>
    </AuthorInfo>
  );
}

const AuthorInfo = styled.div`
  display: flex;
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

export default AuthorSection;